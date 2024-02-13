<script lang="ts">
    import { getOperationDuration } from '$lib/getOperationDuration';
    import type { Count } from '$lib/list/Count';
    import type { Method } from '$lib/methods';
    import { onMount } from 'svelte';
    import Code from './Code.svelte';

    export let methodToTest: Method;

    export let count: Count = 'thousand';

    let durations: number[] = [];

    onMount(() => {
        methodToTest.methods.forEach((method, index) => {
            durations[index] = getOperationDuration(() =>
                method.fn(count)
            );
        });
    });
</script>

<h1
    style:view-transition-name="title-{methodToTest.key}"
    class="mb-7 mt-4 text-4xl"
>
    {methodToTest.title}
</h1>

<div class="flex flex-col gap-7">
    {#each methodToTest.methods as method, index}
        <div>
            <h2 class="text-2xl">{method.title}</h2>
            <Code>
                {method.fn}
            </Code>
            <div class="text-lg">
                {#if durations?.[index]}
                    Duration <strong>
                        {durations[index].toLocaleString(
                            'cs-CZ',
                            {
                                maximumFractionDigits: 3
                            }
                        ) + ' ms'}
                    </strong>
                {:else}
                    Loading...
                {/if}
            </div>
        </div>
    {/each}
</div>
