import type { User } from "$lib/types/User";

export const oldSchoolSort = (data: User[]) => {
    [...data].sort((userA, userB) => userA.age - userB.age);
};

export const toSortedWay = (data: User[]) => {
    data.toSorted((userA, userB) => userA.age - userB.age);
};
