<script>
    import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="layout">
    <Navigation responsive />
    <main>
        <slot />
    </main>
</div>

<style lang="postcss">
    .layout {
        display: grid;
        grid-template-columns: 280px minmax(0, 1fr);
        row-gap: 8px;
        column-gap: 32px;
        padding-top: clamp(12px, 4vw, 24px);
    }

    @media (max-width: 1024px) {
        .layout {
            grid-template-columns: minmax(0, 1fr);
        }
    }
</style>
