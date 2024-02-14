import { TEST_REPEAT_COUNT } from "./constants";

export const getOperationDuration = (operation: () => void): number => {
    const start = performance.now();

    for (let i = 0; i < TEST_REPEAT_COUNT; i++) {
        operation();
    }

    const end = performance.now();

    return end - start;
};
