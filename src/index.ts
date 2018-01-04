export function hex(str: string): string[] {
    if (typeof str !== 'string') {
        return [];
    }

    return [str];
}