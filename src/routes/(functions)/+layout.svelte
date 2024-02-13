<script>
    import Navigation from '$lib/components/Navigation.svelte';
</script>

<div class="layout">
    <Navigation />
    <main>
        <slot />
    </main>
</div>

<style lang="postcss">
    .layout {
        display: grid;
        grid-template-columns: 260px minmax(0, 1fr);
        column-gap: 32px;
        padding-top: 32px;
    }

    @media (max-width: 640px) {
        .layout {
            grid-template-columns: minmax(0, 1fr);
            padding-top: 0px;
        }
    }
</style>
