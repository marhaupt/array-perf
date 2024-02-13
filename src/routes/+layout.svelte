<script>
    import { onNavigate } from '$app/navigation';
    import '../app.pcss';

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

<div class="app">
    <slot />
</div>

<style lang="postcss">
    .app {
        padding: 32px;
    }
</style>
