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
        grid-template-columns: 260px 1fr;
        column-gap: 32px;
        padding-top: 32px;
    }
</style>
