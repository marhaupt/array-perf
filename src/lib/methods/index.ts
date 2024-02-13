import type { Method } from "../types/Method";
import {
    copyClone,
    copyJson,
    copySlice,
    copySpread,
} from "./copyArray";
import {
    sumForEach,
    sumForOf,
    sumReduce,
} from "./forOfEachReduce";
import {
    simpleFilter,
    simpleMap,
    simpleReduce,
} from "./mapFilterReduce";
import { reduceMutate, reduceSpread } from "./reduceMutate";
import {
    reverseMethod,
    sliceReverse,
    toReversedMethod,
} from "./reverseFunctions";
import {
    sliceMethod,
    spliceMethod,
    toSplicedMethod,
} from "./sliceSplice";
import {
    oldSchoolSort,
    sliceSort,
    toSortedWay,
} from "./sortFunctions";

export const methods: Record<string, Method> = {
    basics: {
        key: "basics",
        route: "/basics",
        title: "map vs. filter vs. reduce",
        methods: [
            {
                title: "map",
                fn: simpleMap,
            },
            {
                title: "filter",
                fn: simpleFilter,
            },
            {
                title: "reduce",
                fn: simpleReduce,
            },
        ],
    },
    sum: {
        key: "sum",
        route: "/sum",
        title: "for...of vs. forEach vs. reduce",
        methods: [
            {
                title: "for...of",
                fn: sumForOf,
            },
            {
                title: "forEach",
                fn: sumForEach,
            },
            {
                title: "reduce",
                fn: sumReduce,
            },
        ],
    },
    slice: {
        key: "slice",
        route: "/slice",
        title: "slice vs. splice vs. toSpliced",
        methods: [
            {
                title: "slice",
                fn: sliceMethod,
            },
            {
                title: "splice",
                fn: spliceMethod,
            },
            {
                title: "toSpliced",
                fn: toSplicedMethod,
            },
        ],
    },
    sort: {
        key: "sort",
        route: "/sort",
        title: "sort vs. toSorted vs. slice+sort",
        methods: [
            {
                title: "sort",
                fn: oldSchoolSort,
            },
            {
                title: "toSorted",
                fn: toSortedWay,
            },
            {
                title: "slice sort",
                fn: sliceSort,
            },
        ],
    },
    reverse: {
        key: "reverse",
        route: "/reverse",
        title: "reverse vs. toReversed",
        methods: [
            {
                title: "reverse",
                fn: reverseMethod,
            },
            {
                title: "toReversed",
                fn: toReversedMethod,
            },
            {
                title: "slice reverse",
                fn: sliceReverse,
            },
        ],
    },
    copy: {
        key: "copy",
        route: "/copy",
        title: "spread vs. slice vs. clone vs. json",
        methods: [
            {
                title: "spread",
                fn: copySpread,
            },
            {
                title: "slice",
                fn: copySlice,
            },
            {
                title: "clone",
                fn: copyClone,
            },
            {
                title: "json",
                fn: copyJson,
            },
        ],
    },
    reduce: {
        key: "reduce",
        route: "/reduce",
        title: "reduce mutate vs. spread",
        methods: [
            {
                title: "reduce spread",
                fn: reduceSpread,
            },
            {
                title: "reduce mutate",
                fn: reduceMutate,
            },
        ],
    },
};
