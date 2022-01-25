<script>
  export let id = null
  export let tag = ''
  export let isMinted = false
  export let onMint = () => {}

  import {fly} from 'svelte/transition'
  import Token from './Token.svelte'
</script>

<div in:fly="{{ x: -200, duration: 1000 }}" class="m-2 p-5 rounded shadow-lg border-2">
  <Token {id} {isMinted} />
  <div class="mt-5 w-full flex justify-end">
  {#if isMinted}
  <p>{tag}</p>
  {:else}
  <button on:click={onMint} class="px-3 py-1 bg-green-800 text-white rounded-md">mint</button>
  {/if}
</div>
</div>
