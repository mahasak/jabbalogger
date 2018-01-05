import { LogSinks, Sink } from './sink';
import { IMessage } from './index';
import { Logger } from './logger';

export class LoggerConfiguration {
  private logSinks: LogSinks;

  constructor() {
    this.logSinks = new LogSinks();
  }

  writeTo(sink: Sink): LoggerConfiguration {
    this.logSinks.addSink(sink);
    return this;
  }
  
  create(): Logger {
    return new Logger(this.logSinks);
  }
}