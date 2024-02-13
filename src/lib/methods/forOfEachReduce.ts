import type { User } from '$lib/list/User';

export const sumForOf = (data: User[]) => {
    let sum = 0;

    for (const item of data) {
        sum += item.age;
    }

    return sum;
};

export const sumForEach = (data: User[]) => {
    let sum = 0;

    data.forEach((item) => {
        sum += item.age;
    });

    return sum;
};

export const sumReduce = (data: User[]) =>
    data.reduce((acc, item) => acc + item.age, 0);
