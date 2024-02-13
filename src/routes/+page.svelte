<script lang="ts">
	import { getOperationDuration } from '$lib/getOperationDuration';
	import type { User } from '$lib/list/User';
	import { getDataByCount } from '$lib/list/getDataByCount';

	const mapResult = getOperationDuration(() => {
		getDataByCount('thousand').map((item) => item);
	}, 1000);
	const reduceResult = getOperationDuration(() => {
		getDataByCount('thousand').reduce<User[]>((acc, item) => {
			return [...acc, item];
		}, []);
	}, 1000);

	const reduceMutateResult = getOperationDuration(() => {
		getDataByCount('thousand').reduce<User[]>((acc, item) => {
			acc.push(item);
			return acc;
		}, []);
	}, 1000);

	$: console.log('mapResult', mapResult);
	$: console.log('reduceResult', reduceResult);
	$: console.log('reduceMutateResult', reduceMutateResult);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
