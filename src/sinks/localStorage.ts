import { Sink } from '../sink';
import { IMessage } from '../message';


export class LocalStorageSink implements Sink {
    private static _isSupport: boolean;
    constructor() {
        LocalStorageSink._isSupport = LocalStorageSink.isSupported();
    }

    public isEnabled(): boolean {
        return LocalStorageSink._isSupport;
    }

    private static isSupported(): boolean {
        try {
            const itemBackup = localStorage.getItem("");
            localStorage.removeItem("");
            localStorage.setItem("", "testData");
            localStorage.removeItem("");

            if (itemBackup !== null)
            {
                localStorage.setItem("", itemBackup);
            }

            return true;
        }
        catch(e)
        {
            return false;
        }
    }

    private create() {

    }
    
    public emit(events: IMessage[]): IMessage[] {
        for (let i = 0; i < events.length; ++i) {
            const e = events[i];
            console.log("LocalStorage Logging id" + e.id + "with:" +JSON.stringify(e))
            localStorage.setItem(e.id, JSON.stringify(e));
        }

        return events
    }

    public flush(): Promise<any> {
        throw new Error('Not implemented yet.');
    }
}


export abstract class WebStorages {
    private static _localStorage: Storage | null | undefined;

    public static get localStorage(): Storage | null {
        if (WebStorages._localStorage !== undefined) {
            return WebStorages._localStorage;
        }

        return WebStorages._localStorage = WebStorages.local();
    }

    private static local(): Storage | null {
        if (typeof localStorage === 'undefined') {
            return null;
        }

        try {
            localStorage.getItem(''); // localStorage was disabled by user.
        } catch {
            return null;
        }

        return localStorage;
    }
}
