<script lang="ts">
    import { getOperationDuration } from '$lib/getOperationDuration';
    import type { Count } from '$lib/list/Count';
    import type { Method } from '$lib/methods';
    import { onMount } from 'svelte';
    import Code from './Code.svelte';
    import { getDataByCount } from '$lib/list/getDataByCount';
    import { fly } from 'svelte/transition';
    import { Crown } from 'lucide-svelte';

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

    $: minValue = Math.min(...durations);
</script>

<h1
    style:view-transition-name="title-{methodToTest.key}"
    class="mb-2 mt-4 text-center text-3xl text-secondary-foreground sm:text-left sm:text-4xl"
>
    {methodToTest.title}
</h1>

<div class="flex flex-col gap-7 text-center sm:text-left">
    <div
        class=" block text-xl text-secondary-foreground opacity-40"
    >
        {countNumber} elements
    </div>
    {#each methodToTest.methods as method, index}
        <div>
            <h2
                class="flex items-center justify-center gap-2 text-2xl text-accent-foreground sm:justify-start"
            >
                {method.title}
                {#if durations?.[index]}
                    <strong class="text-primary">
                        {durations[index].toLocaleString(
                            'cs-CZ',
                            {
                                maximumFractionDigits: 3
                            }
                        )} ms
                    </strong>

                    {#if durations[index] === minValue}
                        <span
                            class="text-secondary-foreground"
                        >
                            <Crown />
                        </span>
                    {/if}
                {/if}
            </h2>
            <Code>
                {method.fn}
            </Code>
        </div>
    {/each}
</div>
