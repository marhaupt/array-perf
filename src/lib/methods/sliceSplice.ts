import type { User } from "$lib/types/User";

export const sliceMethod = (data: User[]) => data.slice(2, 5);

export const spliceMethod = (data: User[]) => [...data].splice(2, 5);

export const toSplicedMethod = (data: User[]) => data.toSpliced(2, 5);
