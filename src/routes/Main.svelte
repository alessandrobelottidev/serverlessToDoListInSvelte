<script>
    import { onMount } from 'svelte'
    import { navigate } from 'svelte-routing'
    
    import { authStatus, todos } from '../stores'
    import { supabase } from '../supabaseClient'

    import Navbar from '../components/Navbar.svelte'
    import ToDo from '../components/ToDo.svelte'
    import AddTodo from '../components/AddTodo.svelte'

    $: if ($authStatus == 'SIGNED_OUT') navigate('/sign-in')

    export let location

    onMount(async () => {
        if ($authStatus == 'SIGNED_OUT') navigate('/sign-in')
        else {
            let { data, error } = await supabase
                .from('todos')
                .select('*')
                .order('inserted_at', { ascending: false })

            if (error) console.log('error', error)
            else todos.set(data)
        }
    })
</script>

<Navbar />

<main class="p-6 max-w-7xl mx-auto">
    <h1 class="font-bold text-3xl sm:text-4xl mb-6">Todo</h1>

    <ul class="overflow-y-auto" style="height: calc(100vh - 334px)">
        {#if $todos.length == 0}
            <li>Nothing to do...</li>
        {/if}
        {#each $todos as todo}
            <ToDo {todo} />
        {/each}
    </ul>

    <div class="fixed bottom-6 left-0 w-full">
        <div class="max-w-7xl mx-auto px-6">
            <AddTodo />
        </div>
    </div>
</main>