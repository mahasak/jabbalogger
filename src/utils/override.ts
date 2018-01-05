import { traversal } from './traversal';

export function override(destination: any, ...sources: Array<any>): any {
    if (!destination) {
        destination = {};
    }

    traversal((name, sourceValue) => {
        destination[name] = sourceValue;
    }, destination, sources);

    return destination;
}