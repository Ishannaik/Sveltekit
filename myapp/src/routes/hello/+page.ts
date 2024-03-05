import type { PageLoad, SetHeaders } from '../$types';

export const load = (async ({setHeaders}: { setHeaders: SetHeaders }) => {
    const res = await fetch('someAPI').then(res => res.json());
    const data = await res.json();

    setHeaders({
        age: res.headers.get("age"),
        "cache-control": res.headers.get("cache-control"),
    });
    return DataTransfer;

}) satisfies PageLoad;
 