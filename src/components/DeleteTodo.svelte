<script>
    import { Icon, Trash } from "svelte-hero-icons"
    import { supabase } from "../supabaseClient"
    import { todos } from "../stores"

    export let todo

    const deleteTodo = async () => {
        const { error } = await supabase.from("todos").delete().eq("id", todo.id)

        if (error) console.log("error", error)
        else todos.update((todos) => todos.filter((t) => t.id !== todo.id))
    }
</script>

<button on:click={deleteTodo}>
    <Icon src={Trash} class="w-5 h-5 text-gray-500 hover:text-red-500" />
</button>