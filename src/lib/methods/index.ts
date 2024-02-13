import type { Method } from "../types/Method";
import { copyClone, copyJson, copySlice, copySpread } from "./copyArray";
import { sumForEach, sumForOf, sumReduce } from "./forOfEachReduce";
import { simpleFilter, simpleMap, simpleReduce } from "./mapFilterReduce";
import { reduceMutate, reduceSpread } from "./reduceMutate";
import { reverseMethod, sliceReverse, toReversedMethod } from "./reverseFunctions";
import { sliceMethod, spliceMethod, toSplicedMethod } from "./sliceSplice";
import { oldSchoolSort, sliceSort, toSortedWay } from "./sortFunctions";

export const methods: Record<string, Method> = {
    basics: {
        key: "basics",
        route: "/basics",
        title: "basics",
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
        title: "sum",
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
        title: "slice",
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
        title: "sort",
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
        title: "reverse",
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
        title: "copy",
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
        title: "reduce",
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
