<script>
    import "../app.css";

    import { ModeWatcher } from 'mode-watcher';
    import Tabbar from "$lib/components/tabbar.svelte";
    import { fetchUser } from "$lib/supabase.js"
    import { onMount } from "svelte";


    let user = null;
    
    onMount(async () => {
        user = await fetchUser();
    });
</script>


<ModeWatcher />

<div class="flex flex-col flex-1 min-h-screen">
    <div class="flex-grow flex overflow-scroll">
        <slot />        
    </div>
    {#if user}
    <div class="h-full">
        <Tabbar />
    </div>
    {/if}
</div>