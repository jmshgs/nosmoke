<script>
    import { fetchData } from '$lib/supabase.js';
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    let journals = [];
    let heartRates = [];
    let happinesses = [];
    let canvas;
    let chart;
    let canvas2;
    let chart2;

    onMount(
        async () => {
            const data = await fetchData()
            .then((data) => {
                console.log(data);
                journals = data;
                heartRates = data.map((entry) => entry.resting_hr);
                happinesses = data.map((entry) => entry.hapiness);
            });
            
            canvas = canvas.getContext('2d');
            chart = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: [journals.map((entry) => entry.created_at)],
                    datasets: [{
                        label: 'Resting Heart Rate',
                        data: heartRates,
                        borderWidth: 1,
                        backgroundColor: '#0ea5e9'
                    }]
                }
            });

            canvas2 = canvas2.getContext('2d');
            chart2 = new Chart(canvas2, {
                type: 'line',
                data: {
                    labels: [journals.map((entry) => entry.created_at)],
                    datasets: [{
                        label: 'Happiness Levels',
                        data: happinesses,
                        borderWidth: 1,
                        backgroundColor: '#0ea5e9'
                    }]
                }
            });
        }
    );
</script>


<div class="flex flex-col gap-4 overflow-y-scroll">

    <canvas class="justify-center " bind:this={canvas}></canvas>

    <canvas class="justify-center" bind:this={canvas2}></canvas>





</div>

 

<!-- 
<div class="flex flex-row p-5">

    <div class="h-[] w-screen"></div>

    {#each journals as entry}
    <div class="p-4 border border-gray-300 rounded">
        <p>{entry.journal}</p>
        <p>{entry.hapiness}</p>
        <p>{entry.relapse}</p>
        <p>{entry.resting_hr}</p>
        <p>{entry.resting_hr}</p>
        

    </div>
    {/each}

</div> -->