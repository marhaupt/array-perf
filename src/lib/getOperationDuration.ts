export const getOperationDuration = (
    operation: () => void,
    count: number = 1000
): number => {
    const start = performance.now();

    for (let i = 0; i < count; i++) {
        operation();
    }

    const end = performance.now();

    return end - start;
};
