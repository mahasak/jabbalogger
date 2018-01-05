import './polyfills/objectAssign'
import { ConsoleSink } from './sinks/console';
import { Logger } from './logger';
import { LoggerConfiguration } from './loggerFactory';

export { Guid } from './guid';
export * from './message'
export { LogLevel } from './logLevel';
export {Logger,LoggerConfiguration,ConsoleSink}