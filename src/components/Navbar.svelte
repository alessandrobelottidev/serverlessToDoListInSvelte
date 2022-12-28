<script>
    import logo from '../assets/logo.svg'
    import { Link } from 'svelte-routing'

    const activePath = window.location.pathname
</script>

<nav class="p-6 flex flex-row items-center justify-between max-w-7xl mx-auto">
    <div class="logo">
        <Link to="/app" class="flex flex-row items-center">
            <img class="w-8" src={logo} alt="SupaTODO logo">
            <p class="pl-2 font-bold text-xl">SupaTODO</p>
        </Link>
    </div>
    <ul class="flex flex-row gap-4 items-center">
        <Link to="/app" class={activePath === '/app' ? 'font-bold' : ''}><li>Todo list</li></Link>
        <Link to="/app/profile" class={activePath === '/app/profile' ? 'font-bold' : ''}><li>Profile</li></Link>
        <Link to="/sign-out" class={activePath === '/sign-out' ? 'font-bold': ''}><li>Sign out</li></Link>
    </ul>
</nav>