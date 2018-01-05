export function traversal(
    callback: (name: string, sourceValue: any) => void,
    destination: any,
    sources: Array<any>
) {
    // Do not use for..of to avoid require polyfills
    const length = sources.length;
    for (let index = 0; index < length; index++) {
        const source = sources[index];

        if (!source) {
            continue;
        }

        for (const name in source) {
            if (source.hasOwnProperty(name)) {
                callback(name, source[name]);
            }
        }
    }
}