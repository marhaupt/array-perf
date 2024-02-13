<script lang="ts">
    import { page } from "$app/stores";
    import { methods } from "$lib/methods";
    import Logo from "./Logo.svelte";

    export let responsive = false;
</script>

<nav>
    {#if $page.url.pathname !== "/"}
        <a href="/" style:view-transition-name="logo" class="mb-3">
            <Logo size="small" />
        </a>
    {/if}
    <div class="links" class:responsive>
        {#each Object.values(methods) as method}
            <a
                href={method.route}
                style:view-transition-name="nav-{method.key}"
                class:active={$page.url.pathname === method.route}
            >
                {method.title}
            </a>
        {/each}
    </div>
</nav>

<style lang="postcss">
    nav {
        display: flex;
        gap: 0.5lh;
        align-items: center;
        text-align: center;
        flex-direction: column;
        max-width: 600px;
        margin-inline: auto;
    }

    .links {
        display: flex;
        gap: inherit;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width: 1024px) {
        .links.responsive {
            padding-inline: 15vw;
            flex-direction: row;
        }
    }

    a.active {
        color: hsl(var(--secondary-foreground));
        cursor: default;
    }
</style>
