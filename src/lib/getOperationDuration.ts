export const getOperationDuration = (
    operation: () => void,
    repeatCount: number = 1000
): number => {
    const start = performance.now();

    for (let i = 0; i < repeatCount; i++) {
        operation();
    }

    const end = performance.now();

    return end - start;
};
