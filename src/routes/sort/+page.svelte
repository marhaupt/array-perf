<script lang="ts">
	import { getOperationDuration } from '$lib/getOperationDuration';
	import { getDataByCount } from '$lib/list/getDataByCount';
	import { onMount } from 'svelte';

	const oldSchoolSort = () => {
		[...getDataByCount('thousand')].sort((itemA, itemB) => itemA.age - itemB.age);
	};

	const toSortedWay = () => {
		getDataByCount('thousand').toSorted((itemA, itemB) => itemA.age - itemB.age);
	};

	let sortResult: number;
	let toSortedResult: number;

	const check = () => {
		sortResult = getOperationDuration(oldSchoolSort, 1000);
		toSortedResult = getOperationDuration(toSortedWay, 1000);
	};

	onMount(check);

	$: console.log('sortResult', sortResult);
	$: console.log('toSortedResult', toSortedResult);
</script>

<h1>sort vs toSorted</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>oldSchoolSort</h2>
<pre>
{oldSchoolSort}
</pre>

<div>
	performance: {sortResult ?? ''}
</div>

<h2>toSortedWay</h2>
<pre>
{toSortedWay}
</pre>
<div>
	performace: {toSortedResult ?? ''}
</div>
