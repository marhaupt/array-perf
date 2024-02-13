import type { User } from '$lib/types/User';

export type Method = {
    key: string;
    route: string;
    title: string;
    methods: Array<{
        title: string;
        fn: (data: User[]) => void;
    }>;
};
