<script lang="ts">
    import { getOperationDuration } from '$lib/getOperationDuration';
    import type { Count } from '$lib/list/Count';
    import type { Method } from '$lib/methods';
    import { onMount } from 'svelte';
    import Code from './Code.svelte';
    import { getDataByCount } from '$lib/list/getDataByCount';

    export let methodToTest: Method;

    export let count: Count = 'thousand';

    let durations: number[] = [];

    $: countNumber =
        count === 'thousand'
            ? 1_000
            : count === 'hundred'
              ? 100
              : 10;

    onMount(() => {
        const data = getDataByCount(count);

        methodToTest.methods.forEach((method, index) => {
            durations[index] = getOperationDuration(() =>
                method.fn(data)
            );
        });
    });
</script>

<h1
    style:view-transition-name="title-{methodToTest.key}"
    class="mb-7 mt-4 text-center text-3xl text-[#65ebab] sm:text-left sm:text-4xl"
>
    {methodToTest.title}
    <span class="block opacity-40 sm:inline">
        // Array({countNumber})</span
    >
</h1>

<div class="flex flex-col gap-7 text-center sm:text-left">
    {#each methodToTest.methods as method, index}
        <div>
            <h2 class="text-2xl text-[#fc970c]">
                {method.title}
                {#if durations?.[index]}
                    <strong class="text-primary">
                        {durations[index].toLocaleString(
                            'cs-CZ',
                            {
                                maximumFractionDigits: 3
                            }
                        ) + ' ms'}
                    </strong>
                {/if}
            </h2>
            <Code>
                {method.fn}
            </Code>
        </div>
    {/each}
</div>
