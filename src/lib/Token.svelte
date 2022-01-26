<script>
  import { fade } from "svelte/transition";

  export let id = null
  export let isMinted

  const getUrls = (id) => {
    if (!id) return []

    const split = id.split(':')

    return split.map((url) => {
      return [url, `/layers/${url}.png`]
    })
  }

  const urls = getUrls(id)
  
  const base = '/layers/base.png'
</script>

<div class="rounded-lg wrapper">
  {#if isMinted}
    <img src={base} alt="base" />
    {#each urls as [key, src] (key)}
      <img {src} alt={key} />
    {/each}
  {:else}
    <div 
      out:fade="{{ duration: 200 }}"
      class="text-white text-2xl rounded-lg w-full h-full flex justify-center items-center bg-gray-500">
        ?
    </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;

    height: 60vw;
    min-width: 60vw;

    background-color: bisque;
  }

  @media (min-width: 400px) {
    .wrapper {
      height: 240px;
      min-width: 240px;
    }
  }

  img {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 100%;
  }
</style>
