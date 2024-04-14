<script>
    import TabItem from "$lib/components/tabitem.svelte";
    import Icon from '@iconify/svelte';

    import { page } from '$app/stores';

    import { goto } from '$app/navigation';

    import JournalDialog from "$lib/components/journalDialog.svelte";


    import * as Tabs from "$lib/components/ui/tabs/index.js";



    function getPaths(path) {
        if (path.charAt(0) === '/') {
            return path.slice(1).split("/")
        } else {
            return path.split("/")
        }
       
    }

    function getFirstPath() {
        let pths = getPaths($page.url.pathname);
        if (pths) {
            return pths[0];
        }
        return "";
    }



    const CSS_TAB_SELECTED = "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";


    let paths = [
        ["", "mingcute:home-3-fill"],
        ["graph", "mynaui:chart-graph"]
    ];

    let selectedItem = getFirstPath();





</script>



<div class="h-[115px] w-full  flex flex-row items-center justify-center">
    <div class="h-[70px] bg-secondary rounded-3xl flex flex-row w-[95vw] justify-between items-center px-5 ">
        {#each paths as [key, value] }
        <TabItem key={key} selected={selectedItem == key} onClick={() => {
                goto("/"+key)
                selectedItem = key;
            }}>
            <Icon icon={value} width=28 height=28 class="fill-none"/>
        </TabItem>        
        {/each}

        <TabItem key="donotuse">
              <JournalDialog>
                <Icon icon="mingcute:pencil-2-fill" width=28 height=28 class="fill-none"/>
            </JournalDialog>
    </TabItem>  



    </div>
</div>


