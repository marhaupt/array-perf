import type { Count } from '$lib/list/Count';
import {
    sumForEach,
    sumForOf,
    sumReduce
} from './forOfEachReduce';
import { reduceMutate, reduceSpread } from './reduceMutate';
import {
    oldSchoolSort,
    toSortedWay
} from './sortFunctions';

export type Method = {
    key: string;
    route: string;
    title: string;
    methods: Array<{
        title: string;
        fn: (count: Count) => void;
    }>;
};

export const methods: Record<string, Method> = {
    sort: {
        key: 'sort',
        route: '/sort',
        title: 'sort vs. toSorted',
        methods: [
            {
                title: 'Old school sort',
                fn: oldSchoolSort
            },
            {
                title: 'toSorted way',
                fn: toSortedWay
            }
        ]
    },
    sum: {
        key: 'sum',
        route: '/sum',
        title: 'for...of vs. forEach vs. reduce',
        methods: [
            {
                title: 'for...of',
                fn: sumForOf
            },
            {
                title: 'forEach',
                fn: sumForEach
            },
            {
                title: 'reduce',
                fn: sumReduce
            }
        ]
    },
    reduce: {
        key: 'reduce',
        route: '/reduce',
        title: 'reduce mutate vs. spread',
        methods: [
            {
                title: 'reduce spread',
                fn: reduceSpread
            },
            {
                title: 'reduce mutate',
                fn: reduceMutate
            }
        ]
    }
};
