<script lang="ts">
    import { page } from "$app/stores";
    import { methods } from "$lib/methods";
    import { onMount } from "svelte";
    import Logo from "./Logo.svelte";

    let withActive = false;

    onMount(() => {
        // @ts-ignore
        if (!document.startViewTransition) {
            withActive = true;
        }
    });
</script>

<nav>
    {#if $page.url.pathname !== "/"}
        <a
            href="/"
            style:view-transition-name="logo"
            class="mb-3"
        >
            <Logo size="small" />
        </a>
    {/if}
    {#each Object.values(methods) as method}
        {#if $page.url.pathname !== method.route || withActive}
            <a
                href={method.route}
                style:view-transition-name="title-{method.key}"
                class:active={$page.url.pathname ===
                    method.route}
            >
                {method.title}
            </a>
        {/if}
    {/each}
</nav>

<style lang="postcss">
    nav {
        display: flex;
        flex-direction: column;
        row-gap: 0.75lh;
        align-items: center;
        text-align: center;
    }

    a.active {
        color: hsl(var(--secondary-foreground));
        cursor: default;
    }
</style>
