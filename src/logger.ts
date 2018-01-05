import {LogSinks} from './sink';
import { IMessage } from './message';


export class Logger {
    private logSinks: LogSinks

    constructor(logSinks: LogSinks) {
        this.logSinks = logSinks

    }

    flush(): Promise < any > {
        return this.logSinks.flush();
    }

    /**
     * Emits events through this logger's pipeline.
     */
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