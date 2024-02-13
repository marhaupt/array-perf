import type { User } from '$lib/list/User';

export const reduceSpread = (data: User[]) => {
    data.reduce<User[]>((acc, item) => {
        return [...acc, item];
    }, []);
};

export const reduceMutate = (data: User[]) => {
    data.reduce<User[]>((acc, item) => {
        acc.push(item);
        return acc;
    }, []);
};
