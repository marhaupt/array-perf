<script lang="ts">
    import type { Size } from '$lib/types/Size';

    export let size: Size;
</script>

<img
    src="./logo.webp"
    alt="array perf"
    class:small={size === 'small'}
    class:large={size === 'large'}
/>

<style lang="postcss">
    img {
        max-width: 100%;
        border-radius: 10%;
    }

    .small {
        width: 160px;
    }

    .large {
        width: 300px;
    }
</style>
