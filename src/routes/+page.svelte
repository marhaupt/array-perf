<script lang="ts">
    import Logo from '$lib/components/Logo.svelte';
    import Navigation from '$lib/components/Navigation.svelte';
</script>

<div class="home">
    <h1 style:view-transition-name="logo">
        <Logo size="large" />
    </h1>
    <Navigation />
</div>

<style lang="postcss">
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 70svh;
        flex-direction: column;
        font-size: 32px;
    }
</style>
