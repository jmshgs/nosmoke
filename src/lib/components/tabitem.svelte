<script>

    import { goto } from '$app/navigation';
    import { page } from '$app/stores';  

    export let path = "";
    export let selected = false;




</script>





<div class="">
    <button on:click={onClick} class="w-40 h-12 activated:animate-pulse flex items-center justify-center bg-opacity-15 rounded-xl transition-colors ease-in-out" class:bg-slate-700={selected}>
        <slot/>
    </button>
</div>
