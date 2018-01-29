import './polyfills/objectAssign'
import { ConsoleSink } from './sinks/console';
import { LocalStorageSink} from './sinks/localStorage';
import { Logger } from './logger';
import { LoggerConfiguration } from './loggerFactory';

export { Guid } from './guid';
export * from './message'
export { LogLevel } from './logLevel';
export {Logger,LoggerConfiguration,ConsoleSink, LocalStorageSink}