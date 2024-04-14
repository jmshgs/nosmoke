<script>
    export let onClick = ()=>{};
    export let selected = false;


</script>




<div class="">
    <button on:click={onClick} class="w-24 h-12 activated:animate-pulse flex items-center justify-center  rounded-xl transition-colors ease-in-out {selected ? "bg-slate-700 bg-opacity-15 dark:bg-opacity-30 dark:bg-slate-500" : ""}">
        <slot/>
    </button>
</div>
