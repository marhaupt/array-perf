import type { User } from "$lib/types/User";

export const reverseMethod = (data: User[]) =>
    [...data].reverse();

export const toReversedMethod = (data: User[]) =>
    data.toReversed();

export const sliceReverse = (data: User[]) =>
    data.slice().reverse();
