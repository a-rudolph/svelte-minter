<script>
  export let urls

  const base = '/layers/base.png'
</script>

<div class="wrapper">
  <img src={base} alt="base" />
  {#each urls as [key, src] (key)}
    <img {src} alt={key} />
  {/each}
</div>

<style>
  .wrapper {
    position: relative;

    height: 320px;
    width: 320px;

    border-radius: 5px;
    background-color: bisque;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 100%;
  }
</style>
