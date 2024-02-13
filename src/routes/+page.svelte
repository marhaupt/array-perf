<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="home">
    <h1 style:view-transition-name="logo" class="mb-8 dark:mb-4">
        <Logo size="large" />
    </h1>
    <Navigation />
</div>

<style lang="postcss">
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 70svhs;
        flex-direction: column;
        font-size: 24px;
        padding-inline: 16px;
    }

    @media (max-width: 600px) {
        .home {
            font-size: 22px;
        }
    }
</style>
