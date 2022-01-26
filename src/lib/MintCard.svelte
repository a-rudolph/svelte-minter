<script>
  export let id = null
  export let tag = ''
  export let isMinted = false
  export let onMint = (id) => {}

  import { fly } from 'svelte/transition'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import Token from './Token.svelte'

  let isMinting = false

  const mintProgress = tweened(0, {
    duration: 5000,
    ease: cubicOut,
  })

  const onClick = async () => {
    isMinting = true

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    mintProgress.set(1)
    await sleep(5000)

    isMinting = false
    onMint(id)
  }
</script>

<div
  in:fly={{ x: -300, duration: 500, delay: 600 }}
  class="m-2 p-5 rounded-lg shadow-lg border-2 bg-white"
>
  <Token {id} {isMinted} />
  <div class="rounded-lg my-2 h-2 overflow-hidden">
    <progress class="w-full h-full mb-2" value={$mintProgress} />
  </div>
  <div class="w-full flex justify-between">
    <p class="leading-8">{tag}</p>
    {#if !isMinted}
      <button
        class:disabled={isMinting}
        disabled={isMinting}
        on:click={onClick}
        class="px-3 py-1 bg-green-800 text-white rounded-md"
      >
        mint
      </button>
    {/if}
  </div>
</div>

<style>
  .disabled {
    background-color: gray;
    cursor: not-allowed;
  }
</style>
