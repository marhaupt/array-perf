<script lang="ts">
    import { page } from '$app/stores';
    import { methods } from '$lib/methods';
    import Logo from './Logo.svelte';

    let align: 'right' | 'center' = 'center';

    $: console.log($page.url.pathname);
</script>

<nav>
    {#if $page.url.pathname !== '/'}
        <a
            href="/"
            style:view-transition-name="logo"
            class="mb-3"
        >
            <Logo size="small" />
        </a>
    {/if}
    {#each Object.values(methods) as method}
        {#if $page.url.pathname !== method.route}
            <a
                href={method.route}
                style:view-transition-name="title-{method.key}"
                >{method.title}</a
            >
        {/if}
    {/each}
</nav>

<style lang="postcss">
    nav {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        align-items: center;
        text-align: center;
    }
</style>
