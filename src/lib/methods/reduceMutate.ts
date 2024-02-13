import type { User } from '$lib/types/User';

export const reduceSpread = (data: User[]) => {
    data.reduce<User[]>((acc, user) => {
        return [...acc, user];
    }, []);
};

export const reduceMutate = (data: User[]) => {
    data.reduce<User[]>((acc, user) => {
        acc.push(user);
        return acc;
    }, []);
};
