<script>
    import TabItem from "$lib/components/tabitem.svelte";
    import Icon from '@iconify/svelte';

    import * as Tabs from "$lib/components/ui/tabs/index.js";

    export let selectedItem = 0;


    const CSS_TAB_SELECTED = "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

</script>



<div class="h-[115px] w-full  flex flex-row items-center justify-center">
    <div class="h-[70px] bg-secondary rounded-3xl flex flex-row w-[95vw] justify-between items-center px-5 ">
        <TabItem selected={selectedItem == 0} onClick={() => {selectedItem = 0}}>
            <Icon icon="mingcute:home-3-fill" width=28 height=28 class="fill-none"/>
        </TabItem>

        <TabItem selected={selectedItem == 1} onClick={() => {selectedItem = 1}}>
            <Icon icon="mynaui:chart-graph" width=28 height=28/>
        </TabItem>    

    </div>
</div>


