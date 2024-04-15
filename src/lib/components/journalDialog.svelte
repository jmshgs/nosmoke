<script>
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import { PlusCircleIcon } from "svelte-feather-icons";
    import { Textarea } from "$lib/components/ui/textarea";
    import DatePicker from "$lib/components/datepicker.svelte"
    // import { insertPost } from "$lib/supabaseClient";
    import { getLocalTimeZone } from "@internationalized/date";
    import Icon from "@iconify/svelte";

    import { Checkbox } from "$lib/components/ui/checkbox";
    import Slider from "$lib/components/ui/slider/slider.svelte";

    import { insertData } from "$lib/supabase.js";


    let description = "";
    let restingHeartRate = 70;
    let happiness = 5;
    let relapse = false;


    let open;
</script>

<Dialog.Root open={open}>
    <Dialog.Trigger>
        <slot/>
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
            <Dialog.Title>Today's Journal</Dialog.Title>
            <Dialog.Description>
                How are you feeling?
            </Dialog.Description>
        </Dialog.Header>
        <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">

            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Textarea
                    id="description"
                    bind:value={description}
                    placeholder="Today I..."
                    class="col-span-full resize-none h-[150px]"
                />
            </div>
            <div class="flex flex-col items-center">
       
            <Label for="description" class="text-center align-center pb-5">My resting heartrate is...</Label>
            <Input type="number" pattern="/d*" bind:value={restingHeartRate} inputmode="decimal" class="justify-end"></Input>
            <Label for="description" class="text-right align-center pt-2 text-gray-500">BPM</Label>
        
            
            </div>

            <div class="grid grid-cols-4 items-center gap-4">
               
            </div>
            <div class="flex flex-col w-full items-center">


                <Slider value={[5]} max={10} step={1} class="py-2"/>
                <div class="w-full flex flex-row py-1">
                <Label for="description" class="text-left">1</Label>
                <Label for="description" bhappiness class="text-center flex-grow">How happy do I feel right now?</Label>
                <Label for="description" class="text-right">10</Label>

                </div>

                <div class="flex items-center space-x-2">
                <Checkbox id="relapse" bind:checked={relapse} variant="outline" class="my-5"/>
                    <Label
                      for="terms"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    I stayed clean today.
                    </Label>
                  </div>
            </div>


        </div>
        <Dialog.Footer>
            <Button type="button" on:click={
                async () => {
                    console.log("relapse: "+ relapse);
                    insertData(description, restingHeartRate, happiness, relapse)
                    console.log("Submit")
                    open = false;
                }
            }>Submit</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>