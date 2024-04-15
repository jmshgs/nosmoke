<script>
    import { fetchData } from '$lib/supabase.js';
    import { onMount } from 'svelte';

    let journals = [];

    onMount(
        async () => {
            const data = await fetchData()
            .then((data) => {
                console.log(data);
            });
        }
    );
</script>


<div class="grid grid-cols-3 gap-4">
    {#each journals as entry}
        <div class="p-4 border border-gray-300 rounded">
            <p>{entry.journal}</p>
        </div>
    {/each}
</div>