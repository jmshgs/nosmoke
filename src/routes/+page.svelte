<script>
    import { Button } from "$lib/components/ui/button";
    import Icon from '@iconify/svelte';

</script>


<section class="font-apple font-medium flex w-full items-center overflow-hidden">
	<div class="px-4 mx-auto max-w-screen-xl text-center lg:py-56 items-center justify-center ">
		<div class="display-inline mb-4 text-4xl fontextrabold tracking leading-none
        md:text-5xl lg:text-6xl p-1 overflow-hidden">
			NoSmoke 🚫🚬
		</div>
		<p class="mb-8 text-lg font-normal text-gray-700 dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">
			Stop smoking for good. <br>Get help and gain motivation while quitting smoking.
		</p>

		<div
			class="flex flex-col space-y-5 sm:flex-row sm:justify-center sm:space-y-0">
			<Button href="signup" class="h-12 space-x-3" variant="outline">
				<p>Get started</p>
                <Icon icon="akar-icons:arrow-right" class="w-4 h-4"/>
			</Button>
			<Button href="#" class="h-12" variant="outline">About Us</Button>
		</div>
	</div>
</section>
