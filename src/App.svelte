<script>
  import { onMount } from 'svelte'
  import { Router, Route } from 'svelte-routing'
  import { authStatus } from './stores'
  import { supabase } from './supabaseClient'

  import SignUp from './routes/SignUp.svelte'
  import SignIn from './routes/SignIn.svelte'
  import SignOut from './routes/SignOut.svelte'
  import Confirmed from './routes/Confirmed.svelte'
  import Main from './routes/Main.svelte'
  import Profile from './routes/Profile.svelte'
  import Landing from './routes/Landing.svelte'
  import NotFound from './routes/NotFound.svelte'

  onMount(async () => {
    supabase.auth.onAuthStateChange((event, session) => {
      $authStatus = event
    })
  })
</script>

<Router>
  <Route path="/app/profile" component={Profile} />
  <Route path="/app/" component={Main} />

  <Route path="/sign-up" component={SignUp} />
  <Route path="/sign-in" component={SignIn} />
  <Route path="/sign-out" component={SignOut} />

  <Route path="/confirmed" component={Confirmed} />

  <Route path="/" component={Landing} />

  <Route component="{NotFound}" />
</Router>
