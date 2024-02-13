import type { User } from '$lib/list/User';

export const oldSchoolSort = (data: User[]) => {
    [...data].sort((itemA, itemB) => itemA.age - itemB.age);
};

export const toSortedWay = (data: User[]) => {
    data.toSorted((itemA, itemB) => itemA.age - itemB.age);
};
