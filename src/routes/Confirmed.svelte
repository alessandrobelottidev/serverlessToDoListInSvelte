<script>
    import { navigate } from 'svelte-routing'
</script>

<main class="p-6 px-6 max-w-7xl mx-auto flex flex-col items-center">
    <h1 class="text-center font-bold text-3xl sm:text-4xl mb-6">Thanks for registering an account, go try the app now!</h1>
    <button class="btn btn-primary flex flex-row items-center mb-8" on:click={() => { navigate('/app') } }>
        Try the app
    </button>
</main>