<script>
  export let urls
  export let isMinted

  const base = '/layers/base.png'
</script>

<div class="rounded-lg wrapper">
  {#if isMinted}
    <img src={base} alt="base" />
    {#each urls as [key, src] (key)}
      <img {src} alt={key} />
    {/each}
  {:else}
    <div class="placeholder">?</div>
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
      height: 320px;
      min-width: 320px;
    }
  }

  img {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 100%;
  }

  .placeholder {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
</style>
