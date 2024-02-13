import type { User } from "$lib/types/User";

export const copySpread = (data: User[]) => {
    return [...data];
};

export const copySlice = (data: User[]) => {
    return data.slice();
};

export const copyClone = (data: User[]) => {
    return structuredClone(data);
};

export const copyJson = (data: User[]) => {
    return JSON.parse(JSON.stringify(data));
};
