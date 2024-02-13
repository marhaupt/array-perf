<script lang="ts">
    import MethodResult from "$lib/components/MethodResult.svelte";
    import { methods } from "$lib/methods";
</script>

<MethodResult methodToTest={methods.copy} />
