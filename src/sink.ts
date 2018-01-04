import { IMessage } from "./message";

export interface Sink {
  emit(events: IMessage[]): boolean;
  flush(): Promise<any>;
}