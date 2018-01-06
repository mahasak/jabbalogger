export enum MessageType {
  EventLog = 1 << 0,
  Measurement = 1 << 1,
}

export interface Map<T> {
  [K: string]: T
}

export interface IMessage {
  application: string
  id: string
  logLevel: number;
  logTime: Date
  tags: Map<string>
  getMessageType(): MessageType
  getMessage(): string
}

export class EventLog implements IMessage {
  application: string;
  id: string;
  logLevel: number;
  logTime: Date;
  message: string;
  tags: Map<string>;  

  constructor(logLevel: number, message: string, tags: Map<string>) {
    this.id = '1234'
    this.logLevel = logLevel
    this.logTime =  new Date()
    this.message = message
    this.tags = tags
  }

  getMessageType():MessageType {
    return MessageType.EventLog
  }

  getMessage(): string {
    return this.message;
  }

}

export class Measurement implements IMessage {
  application: string;
  id: string;
  name: string
  logLevel: number;
  logTime: Date;
  tags: Map<string>;
  value: number;

  constructor(name: string, value: number, tags: Map<string>) {
    this.id = '1234'
    this.logTime =  new Date()
    this.name = name
    this.value = value
    this.tags = tags
  }

  getMessageType():MessageType {
    return MessageType.Measurement
  }

  getMessage(): string {
    return `metrics: ${this.name} = ${this.value}`;
  }

}
