<script>
    import "../app.css";

    import { ModeWatcher } from 'mode-watcher';
    import Tabbar from "$lib/components/tabbar.svelte";


</script>


<ModeWatcher />

<div class="flex flex-col flex-1 min-h-screen">
    <div class="flex-grow flex overflow-scroll">
        <slot />        
    </div>
    <div class="h-full">
        <Tabbar />
    </div>
</div>