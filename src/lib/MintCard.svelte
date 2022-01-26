<script>
  export let id = null
  export let tag = ''
  export let isMinted = false
  export let onMint = (id) => {}

  import {fly} from 'svelte/transition'
  import Token from './Token.svelte'

  const onClick = () => {
    onMint(id)
  }
</script>

<div
  in:fly="{{ x: -300, duration: 500, delay: 400 }}"
  class="m-2 p-5 rounded shadow-lg border-2">
  <Token {id} {isMinted} />
  <div class="mt-5 w-full flex justify-between">
      <p class="leading-8">{tag}</p>
      {#if !isMinted}
        <button
          on:click={onClick}
          class="px-3 py-1 bg-green-800 text-white rounded-md">
          mint
        </button>
      {/if}
  </div>
</div>
