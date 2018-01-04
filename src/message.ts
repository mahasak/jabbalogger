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
  logTime: Date
  tags: Map<string>
  getMessageType(): MessageType
  getMessage(): object
}

export class EventLog implements IMessage {
  application: string;
  id: string;
  logTime: Date;
  message: string;
  tags: Map<string>;  

  constructor(message: string) {
    this.id = '1234'
    this.logTime =  new Date()
    this.message = message
    this.tags = {}
  }

  getMessageType():MessageType {
    return MessageType.EventLog
  }

  getMessage(): object {
    return {
      message: this.message,
      tags: this.tags
    };
  }

}

export class Measurement implements IMessage {
  application: string;
  id: string;
  name: string
  logTime: Date;
  tags: Map<string>;
  value: number;

  constructor(name: string, value: number) {
    this.id = '1234'
    this.logTime =  new Date()
    this.name = name
    this.value = value
    this.tags = {}
  }

  getMessageType():MessageType {
    return MessageType.Measurement
  }

  getMessage(): object {
    return {
      name: this.name,
      value: this.value,
      tags: this.tags
    };
  }

}
