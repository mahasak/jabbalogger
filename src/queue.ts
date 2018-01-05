
import { IMessage } from './message';
import { override } from './utils/override';

export interface IQueue {
    readonly id: string;
    readonly count: number;
    readonly size: number;
    enqueue(messages: Array<IMessage>): void | Promise<void>;
    dequeue(count: number, avoidConcurrancy?: boolean): Array<IMessage> | Promise<Array<IMessage>>;
    destroy(): void | Promise<void>;
    dispose(): void;
}

export interface IQueueConfiguration {
    maxMessageCount?: number;

    maxEnqueueCount?: number;
}

class QueueConfiguration implements IQueueConfiguration {
    public maxMessageCount: number = 15000;

    public maxEnqueueCount: number = 300;
}

export class SampledQueue implements IQueue {
    public config: QueueConfiguration = new QueueConfiguration();

    constructor(
        public readonly queue: IQueue,
        //private readonly _logger: ILogger,
        config: IQueueConfiguration | null = null
    ) {
        override(this.config, config);
    }

    public get id(): string { return this.queue.id; }

    public get count(): number { return this.queue.count; }

    public get size(): number { return this.config.maxMessageCount; }

    public enqueue(messages: IMessage[]): void | Promise<void> {
        const freeCount = this.size - this.queue.count;

        if (freeCount <= 0) {
            return;
        }

        const maxEnqueueCount = this.config.maxEnqueueCount;
        if (messages.length > maxEnqueueCount) {
            //this._logger.log(`Exceed max enqueued count per request (${maxEnqueueCount}). Lost ${messages.length - maxEnqueueCount} messages.`);
            messages = messages.slice(0, maxEnqueueCount);
        }

        if (freeCount < messages.length) {
            messages = messages.slice(0, freeCount);
        }

        return this.queue.enqueue(messages);
    }

    public dequeue(count: number, avoidConcurrency?: boolean): Array<IMessage> | Promise<Array<IMessage>> {
        return this.queue.dequeue(count, avoidConcurrency);
    }

    public destroy(): void | Promise<void> {
        return this.queue.destroy();
    }

    public dispose(): void {
        return this.queue.dispose();
    }
}