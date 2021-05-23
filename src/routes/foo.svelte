This is FOO.
<script context="module">
  export const prerender = true;

  export async function load({session}){
      return{
          props:{
              session
          }
      }
  }
</script>

<script>
export let session
</script>
