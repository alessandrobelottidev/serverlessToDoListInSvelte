<script>
    import { supabase } from "../supabaseClient"
    import DeleteTodo from "./DeleteTodo.svelte"

    export let todo

    const handleCheck = async () => {
        const { error } = await supabase
            .from('todos')
            .update({ is_complete: !todo.is_complete })
            .eq('id', todo.id)

        if (error) console.log('error', error)
        else todo.is_complete = !todo.is_complete
    }
</script>

<li class="flex flex-row p-2 items-center hover:cursor-pointer hover:bg-base-200 rounded-md justify-between">
    <div class="flex flex-row items-center w-full" on:click={handleCheck}>
        <input type="checkbox" checked={todo.is_complete} class="checkbox mr-2 h-5 w-5" />
        <p class={todo.is_complete ? 'line-through' : ''}>{todo.task}</p>
    </div>
    
    <DeleteTodo {todo} />
</li>