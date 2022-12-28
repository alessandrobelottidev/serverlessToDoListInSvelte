<script>
    import { navigate } from 'svelte-routing'
    import Navbar from '../components/Navbar.svelte'
    import { supabase } from '../supabaseClient'

    export let location

    const getUser = async () => {
        const user = (await supabase.auth.getUser()).data.user
        if (!user) navigate('/login', { replace: true })
        return user
    }
</script>

<Navbar />

<main class="p-6 max-w-7xl mx-auto">
    <h1 class="text-center font-bold text-3xl sm:text-4xl mb-6">Profile</h1>
    <div class="max-w-md mx-auto text-center">
        {#await getUser() then user}
            <p>UUID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Last sign-in: {new Date(user.last_sign_in_at).toLocaleString()}</p>
        {/await}
    </div>
</main>