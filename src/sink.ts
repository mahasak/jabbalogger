import { IMessage } from "./message";

export interface Sink {
  emit(events: IMessage[]): IMessage[];
  flush(): Promise<any>;
}

export class LogSinks {
  private sinks: Sink[];
  private eventQueue: IMessage[];
  private flushInProgress: boolean;
  private flushPromise: Promise<any>;

  constructor() {
    this.sinks = [];
    this.eventQueue = [];
    this.flushInProgress = false;
  }
  
  addSink(sink: Sink) {
    this.sinks.push(sink);
  }

  emit(events: IMessage[]): Promise<any> {
    if (this.flushInProgress) {
      this.eventQueue = this.eventQueue.concat(events);
      return this.flushPromise;
    } else {
      if (!this.sinks.length || !events.length) {
        return Promise.resolve();
      }

      let promise = Promise.resolve(this.sinks[0].emit(events));
      for (let i = 1; i < this.sinks.length; ++i) {
        promise = promise.then(events => this.sinks[i].emit(events));
      }

      return promise;
    }
  }

  flush(): Promise<any> {
    if (this.flushInProgress) {
      return this.flushPromise;
    }

    this.flushInProgress = true;
    return this.flushPromise = Promise.resolve()
      .then(() => {
        if (this.sinks.length === 0) {
          return;
        }

        let promise = this.sinks[0].flush();
        for (let i = 1; i < this.sinks.length; ++i) {
          promise = promise.then(() => this.sinks[i].flush());
        }
        return promise;
      })
      .then(() => {
        this.flushInProgress = false;
        const queuedEvents = this.eventQueue.slice();
        this.eventQueue = [];
        return this.emit(queuedEvents);
      });
  }
}