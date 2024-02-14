<script lang="ts">
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import { getOperationDuration } from "$lib/getOperationDuration";
    import { getDataByCount } from "$lib/list/getDataByCount";
    import type { Count } from "$lib/types/Count";
    import type { Method } from "$lib/types/Method";
    import { Crown } from "lucide-svelte";
    import Code from "./Code.svelte";

    export let methodToTest: Method;

    export let count: Count = "thousand";
    let previousCount: Count;

    let durations: number[] = [];

    $: {
        if (count === undefined) {
            count = previousCount;
        } else {
            previousCount = count;

            const data = getDataByCount(count);

            methodToTest.methods.forEach((method, index) => {
                durations[index] = getOperationDuration(() => method.fn(data));
            });
        }
    }

    $: minValue = Math.min(...durations);
</script>

<h1
    style:view-transition-name="title-{methodToTest.key}"
    class="mb-4 mt-4 text-center text-4xl text-secondary-foreground sm:text-5xl lg:text-left"
>
    {methodToTest.title}
</h1>

<div
    class="mx-auto flex max-w-[600px] flex-col gap-7 text-center lg:mx-0 lg:max-w-[800px] lg:text-left"
>
    <div
        class="flex items-center justify-center gap-[1ch] text-xl text-secondary-foreground lg:justify-start"
    >
        <ToggleGroup.Root type="single" size="sm" bind:value={count}>
            <ToggleGroup.Item value="ten" aria-label="Toggle 10" class="text-[1rem]">
                10
            </ToggleGroup.Item>
            <ToggleGroup.Item value="hundred" aria-label="Toggle 100" class="text-[1rem]">
                100
            </ToggleGroup.Item>
            <ToggleGroup.Item value="thousand" aria-label="Toggle 1000" class="text-[1rem]">
                1000
            </ToggleGroup.Item>
        </ToggleGroup.Root>
        <span class="text-sm"> elements </span>
    </div>
    {#each methodToTest.methods as method, index}
        <div>
            <h2
                class="flex items-center justify-center gap-[1ch] text-2xl text-accent-foreground sm:text-3xl lg:justify-start"
            >
                {method.title}
                {#if durations?.[index] !== undefined}
                    <strong class="text-primary">
                        {durations[index].toLocaleString("cs-CZ", {
                            maximumFractionDigits: 3,
                        })} ms
                    </strong>

                    {#if durations[index] === minValue}
                        <span class="text-secondary-foreground">
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
