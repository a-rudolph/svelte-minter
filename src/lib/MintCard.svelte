<script>
  export let id = null
  export let isMinted = false
  export let onMint = () => {}

  import Token from './Token.svelte'
</script>

<div class="m-2 p-5 rounded shadow-lg border-2">
  <Token {id} {isMinted} />
  <div class="mt-5 w-full flex justify-end">
  {#if isMinted}
  <p>this one is minted</p>
  {:else}
  <button on:click={onMint} class="px-3 py-1 bg-green-800 text-white rounded-md">mint</button>
  {/if}
</div>
</div>
