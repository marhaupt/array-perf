import type { Method } from '../types/Method';
import {
    sumForEach,
    sumForOf,
    sumReduce
} from './forOfEachReduce';
import {
    simpleFilter,
    simpleMap,
    simpleReduce
} from './mapFilterReduce';
import { reduceMutate, reduceSpread } from './reduceMutate';
import {
    oldSchoolSort,
    toSortedWay
} from './sortFunctions';

export const methods: Record<string, Method> = {
    sort: {
        key: 'sort',
        route: '/sort',
        title: 'sort vs. toSorted',
        methods: [
            {
                title: 'sort',
                fn: oldSchoolSort
            },
            {
                title: 'toSorted',
                fn: toSortedWay
            }
        ]
    },
    basics: {
        key: 'basics',
        route: '/basics',
        title: 'map vs. filter vs. reduce',
        methods: [
            {
                title: 'map',
                fn: simpleMap
            },
            {
                title: 'filter',
                fn: simpleFilter
            },
            {
                title: 'reduce',
                fn: simpleReduce
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
