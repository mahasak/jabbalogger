import './polyfills/objectAssign'

export { Guid } from './guid';
export * from './message'
export { LogLevel } from './logLevel';

export function hex(str: string): string[] {
    if (typeof str !== 'string') {
        return [];
    }

    return [str];
}