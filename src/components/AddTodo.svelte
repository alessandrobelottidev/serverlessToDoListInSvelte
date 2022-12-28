<script>
    import { todos } from '../stores'
    import { supabase } from '../supabaseClient'

    let newTask

    const addTodo = async () => {
        const id = (await supabase.auth.getUser()).data.user.id

        const { data, error } = await supabase
            .from('todos')
            .insert([
                { task: newTask, is_complete: false, user_id: id }
            ])
            .select()

        if (error) console.log('error', error)
        else $todos = [data[0], ...$todos]
    }
</script>

<div class="form-control w-full mb-4">
    <label class="label" for="newTask">
        <span class="label-text">New task</span>
    </label>
    <input type="text" name="newTask" placeholder="Example task" bind:value={newTask} class="input input-bordered w-full">
</div>

<button class="btn btn-primary w-full" on:click={addTodo}>Add</button>