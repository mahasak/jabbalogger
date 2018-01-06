import { LogSinks } from './sink';
import { Map,IMessage,Measurement } from './message';
import { EventLog } from './index';


export class Logger {
    private logSinks: LogSinks

    constructor(logSinks: LogSinks) {
        this.logSinks = logSinks
    }

    warning(message: string, tags: Map<string> = {}): void {
        const log = new EventLog(message, tags)
        this.write(log)
    }

    measure(name: string, value: number, tags: Map<string> = {}): void {
        const measurement = new Measurement(name,value,tags)
        this.write(measurement)
    }

    flush(): Promise<any> {
        return this.logSinks.flush();
    }

    emit(events: IMessage[]): IMessage[] {
        try {
            this.logSinks.emit(events);
            return events;
        } catch (error) {
            throw error;
        }
    }

    write(message: IMessage, properties?: any[], error ? : Error) {
        this.logSinks.emit([message]);
    }
}