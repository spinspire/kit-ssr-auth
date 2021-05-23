<script>
  import { session } from '$app/stores';
  import {goto} from '$app/navigation'

  let resp = ""
  async function login() {
    await fetch('/login', {
      method: 'POST'
    });
    window.location.href = "/foo"

    console.log("login done");
  }
  async function logout() {
    await fetch('/logout', {
      method: 'POST'
    })
    window.location = "/";

    console.log("good bye");
  }

  $: console.log("session",$session)
</script>

<button on:click|preventDefault={login}>Login</button>
<button on:click|preventDefault={logout}>Logout</button>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/foo">Foo</a></li>
    <li><a href="/login">Login</a></li>
  </ul>
</nav>


<code><pre>{JSON.stringify($session)}</pre></code>

<slot/>

