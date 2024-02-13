import type { User } from "$lib/types/User";

export const simpleMap = (data: User[]) => {
    data.map((user) => user.age);
};

export const simpleFilter = (data: User[]) => {
    data.filter((user) => user.age > 20);
};

export const simpleReduce = (data: User[]) => {
    data.reduce<User[]>((acc, user) => {
        if (user.age > 20) {
            acc.push(user);
        }
        return acc;
    }, []);
};
