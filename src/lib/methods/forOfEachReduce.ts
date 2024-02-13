import type { Count } from '$lib/list/Count';
import { getDataByCount } from '$lib/list/getDataByCount';

export const sumForOf = (count: Count) => {
    let sum = 0;

    const data = getDataByCount(count);

    for (const item of data) {
        sum += item.age;
    }

    return sum;
};

export const sumForEach = (count: Count) => {
    let sum = 0;

    const data = getDataByCount(count);

    data.forEach((item) => {
        sum += item.age;
    });

    return sum;
};

export const sumReduce = (count: Count) =>
    getDataByCount(count).reduce(
        (acc, item) => acc + item.age,
        0
    );
