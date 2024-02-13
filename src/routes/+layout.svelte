<script>
    import { onNavigate } from '$app/navigation';
    import { ModeWatcher } from 'mode-watcher';
    import '../app.pcss';
    import ModeSwitch from '$lib/components/ModeSwitch.svelte';

    onNavigate((navigation) => {
        // @ts-ignore
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            // @ts-ignore
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<div class="mode-position">
    <ModeSwitch />
</div>

<ModeWatcher />
<div class="app">
    <slot />
</div>

<style lang="postcss">
    .app {
        padding-block: 48px 32px;
        padding-inline: clamp(16px, 4vw, 32px);
    }

    .mode-position {
        position: absolute;
        top: 16px;
        right: 16px;
    }
</style>
