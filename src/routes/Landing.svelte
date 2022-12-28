<script>
    import { Link } from 'svelte-routing'
    import logo from '../assets/logo.svg'
    import svelteLogo from '../assets/svelte-logo.svg'
    import supabaseLogo from '../assets/supabase-logo.svg'
    import { Icon, Link as ExternalLink } from 'svelte-hero-icons'

    export let location
</script>

<nav class="p-6 flex flex-row items-center justify-between max-w-7xl mx-auto">
    <div class="logo">
        <Link to="/" class="flex flex-row items-center">
            <img class="w-8" src={logo} alt="SupaTODO logo">
            <p class="pl-2 font-bold text-xl">SupaTODO</p>
        </Link>
    </div>
    <ul class="flex flex-row gap-4 items-center">
        <Link to="/sign-in"><li>Sign in</li></Link>
        <Link to="/sign-up" class="btn btn-primary"><li>Sign up</li></Link>
    </ul>
</nav>

<main class="px-6">
    <!-- Hero -->
    <div class="h-screen max-h-96 flex items-center justify-center py-6">
        <div class="flex flex-col justify-center max-w-3xl">
            <h1 class="text-center font-bold text-3xl sm:text-4xl mb-6">
                The modern serverless todo list app made with 
                <img class="w-8 inline-block" src={svelteLogo} alt="Svelte logo"> Svelte and 
                <img class="w-8 inline-block" src={supabaseLogo} alt="Supabase logo"> Supabase.
            </h1>
            <div class="flex flex-row gap-4 items-center justify-center">
                <Link to="/sign-up" class="btn btn-primary">Try it out</Link>
                <a href="https://github.com/alessandrobelottidev/serverlessToDoListInSvelte" target="_blank" class="flex flex-row items-center">
                    <Icon src={ExternalLink} class="inline-block w-4 h-4 mr-2" />
                    Github
                </a>
            </div>
        </div>
    </div>
</main>

<footer class="footer footer-center p-4 bg-base-200 text-base-content">
    <div>
      <p>Copyright © {new Date().getFullYear()} - All rights reserved by Alessandro Belotti</p>
    </div>
</footer>