import type { Count } from '$lib/list/Count';
import type { User } from '$lib/list/User';
import { getDataByCount } from '$lib/list/getDataByCount';

export const reduceSpread = (count: Count) => {
    getDataByCount(count).reduce<User[]>((acc, item) => {
        return [...acc, item];
    }, []);
};

export const reduceMutate = (count: Count) => {
    getDataByCount(count).reduce<User[]>((acc, item) => {
        acc.push(item);
        return acc;
    }, []);
};
