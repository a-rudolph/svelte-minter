<script>
  const maxis = {
    chin: 2,
    ears: 2,
    eyes: 5,
    hair: 5,
    mouth: 6,
    nose: 2,
    neck: 3,
  }

  const getN = (max) => {
    return Math.ceil(Math.random() * max)
  }

  const getUrl = (key) => {
    const max = maxis[key]
    const n = getN(max)

    return `/layers/${key}-${n}.png`
  }

  const getKeyUrlPair = (key) => {
    return [key, getUrl(key)]
  }

  const getUrls = () => {
    const keys = Object.keys(maxis)

    return keys.map(getKeyUrlPair)
  }

  const urls = getUrls()

  const base = '/layers/base.png'
</script>

<div class="row">
  <div class="wrapper">
    <img src={base} alt="base" />
    {#each urls as [key, src] (key)}
      <img {src} alt={key} />
    {/each}
  </div>
</div>

<style>
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

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
