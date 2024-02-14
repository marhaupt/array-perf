<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
    import { TEST_REPEAT_COUNT } from "$lib/constants";
    import { fly } from "svelte/transition";
</script>

<div class="home">
    <h1 style:view-transition-name="logo" class="mb-8 dark:mb-4">
        <Logo size="large" />
    </h1>
    <Navigation />
    <footer class="flex flex-col gap-2 text-center text-slate-700 dark:text-slate-400">
        <div>
            data generated as <a
                href="https://generatedata.com/"
                class="text-secondary-foreground underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-current"
            >
                generatedata.com
            </a>
        </div>
        <div>every test ran {TEST_REPEAT_COUNT}×</div>
    </footer>
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

    footer {
        margin-top: 32px;
        font-size: 16px;
    }
</style>
