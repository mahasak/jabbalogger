import { LogSinks } from './sink';
import { Map,IMessage,Measurement } from './message';


export class Logger {
    private logSinks: LogSinks

    constructor(logSinks: LogSinks) {
        this.logSinks = logSinks
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