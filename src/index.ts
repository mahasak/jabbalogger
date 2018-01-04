import './polyfills/objectAssign'
import { MessageType } from './messageType';
export { LogLevel } from './logLevel';

export function hex(str: string): string[] {
    if (typeof str !== 'string') {
        return [];
    }

    return [str];
}