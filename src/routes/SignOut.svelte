<script>
    import { onMount } from "svelte"
    import { supabase } from "../supabaseClient"
    import { navigate } from "svelte-routing"

    onMount(async () => {
        await supabase.auth.signOut()
        navigate("/sign-in")
    })
</script>