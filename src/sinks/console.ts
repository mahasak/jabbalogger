import { Sink } from '../sink';
import { IMessage } from '../index';
import { LogLevel } from '../logLevel';

export interface ConsoleProxy {
  error(message?: any, ...properties: any[]);
  warn(message?: any, ...properties: any[]);
  info(message?: any, ...properties: any[]);
  debug(message?: any, ...properties: any[]);
  log(message?: any, ...properties: any[]);
}

export interface ConsoleSinkOptions {
  console?: any;
  includeTimestamps?: boolean;
  includeProperties?: boolean;
  restrictedToMinimumLevel?: LogLevel;
}

export class ConsoleSink implements Sink {
  private options: ConsoleSinkOptions;
  private console: ConsoleProxy;

  constructor(options?: ConsoleSinkOptions) {
    this.options = options || {};
    const internalConsole = this.options.console || typeof console !== 'undefined' && console || null;
    const stub = function () { };

    // console.debug is no-op for Node, so use console.log instead.
    const nodeConsole = !this.options.console && typeof process !== 'undefined' && process.versions.node;

    this.console = {
      error: (internalConsole && (internalConsole.error || internalConsole.log)) || stub,
      warn:  (internalConsole && (internalConsole.warn || internalConsole.log)) || stub,
      info:  (internalConsole && (internalConsole.info || internalConsole.log)) || stub,
      debug: (internalConsole && ((!nodeConsole && internalConsole.debug) || internalConsole.log)) || stub,
      log:   (internalConsole && internalConsole.log) || stub
    };
  }

  public emit(events: IMessage[]): IMessage[] {
    for (let i = 0; i < events.length; ++i) {
      const e = events[i];

      switch (e.logLevel) {
        case LogLevel.Fatal:
          this.writeToConsole(this.console.error, 'Fatal', e);
          break;

        case LogLevel.Error:
          this.writeToConsole(this.console.error, 'Error', e);
          break;

        case LogLevel.Warning:
          this.writeToConsole(this.console.warn, 'Warning', e);
          break;

        case LogLevel.Information:
          this.writeToConsole(this.console.info, 'Information', e);
          break;
          
        case LogLevel.Debug:
          this.writeToConsole(this.console.debug, 'Debug', e);
          break;

        default: 
          this.writeToConsole(this.console.log, 'Log', e);
          break;
      }
    }

    return events
  }

  public flush() {
    return Promise.resolve();
  }

  private writeToConsole(logMethod: Function, prefix: string, e: IMessage) {
    let output = `[${prefix}] ${e.getMessage()}`;
    if (this.options.includeTimestamps) {
      output = `${e.logTime} ${output}`;
    }
    const values = [];
    logMethod(output, ...values);
  }
}