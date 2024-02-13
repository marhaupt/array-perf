import type { User } from '$lib/types/User';

export const sumForOf = (data: User[]) => {
    let sum = 0;

    for (const user of data) {
        sum += user.age;
    }

    return sum;
};

export const sumForEach = (data: User[]) => {
    let sum = 0;

    data.forEach((user) => {
        sum += user.age;
    });

    return sum;
};

export const sumReduce = (data: User[]) =>
    data.reduce((acc, user) => acc + user.age, 0);
