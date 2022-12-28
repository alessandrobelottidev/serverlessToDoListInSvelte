<script>
    import { authStatus } from '../stores'
    import { navigate } from 'svelte-routing'
    import { supabase } from '../supabaseClient';
    import octiconsMarkGithub from '../assets/octicons-mark-github.svg'
    import { Icon, ArrowCircleLeft } from 'svelte-hero-icons'

    $: if ($authStatus == 'SIGNED_IN') navigate('/app')

    const host = import.meta.env.VITE_HOST

    export let location

    let email
    let password

    let notification = ''
    
    let signUpClicked = false

    const signUp = async (provider) => {
        if (signUpClicked) return
        signUpClicked = true

        let res = null
        switch (provider) {
            case 'email':
                res = await signUpEmail()
                break
            case 'github':
                res = await signUpGithub()
                break
            default:
                break
        }

        if (res) {
            if (res.error) notification = res.error.message
            else notification = 'Check your email for the confirmation link (it might take a while)!'
        }

        signUpClicked = false
    }

    const signUpEmail = async () => {
        const { data, error } = await supabase.auth.signUp({email, password })
    
        return {data, error}
    }

    const signUpGithub = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({ 
            provider: 'github', 
            options: {
                redirectTo: host + '/app'
            }
        })

        return {data, error}
    }
</script>

<main class="p-6 max-w-md mx-auto">
    <button class="flex flex-row items-center mb-8" on:click={() => { navigate('/') } }>
        <Icon class="h-5 w-5 mr-2 inline-block" src={ArrowCircleLeft} />
        Back to home
    </button>

    <h1 class="text-center font-bold text-3xl sm:text-4xl mb-6">Sign up</h1>

    <div class="max-w-md mx-auto">
        <div class="form-control w-full mb-4">
            <label class="label" for="email">
                <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="example@example.com" name="email" bind:value={email} class="input input-bordered w-full">
        </div>

        <div class="form-control w-full mb-6">
            <label class="label" for="password">
                <span class="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="********" bind:value={password} class="input input-bordered w-full">
        </div>

        <button class="btn btn-primary w-full" on:click={() => { signUp('email') } }>Sign up with email</button>
        
        <div class="mt-8 mb-4">
            <hr>
            <p class="mt-[-0.75rem] w-max mx-auto bg-base-100 px-4">OR</p>
        </div>
        
        
        <button on:click={() => { signUp('github') } } class="flex flex-row items-center justify-center w-full">
            <img src={octiconsMarkGithub} alt="Github logo" class="h-5 inline-block mr-2">
            Sign up with Github
        </button>

        <p class="mt-4 text-center">{ notification }</p>
    </div>
</main>