<script>
  import Button from './Button.svelte'
  import Token from './Token.svelte'

  const maxis = {
    chin: 2,
    ears: 2,
    eyes: 5,
    hair: 5,
    mouth: 6,
    nose: 2,
    neck: 3,
  }

  const possibilities = Object.values(maxis).reduce((curr, acc) => curr * acc)

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

  let urls = getUrls()

  const shuffle = () => {
    urls = getUrls()
  }
</script>

<div>
  <p>
    {possibilities} possible tokens
  </p>
  <div class="row">
    <Button on:click={shuffle}>SHUFFLE</Button>
  </div>
  <div class="row">
    <Token {urls} />
  </div>
</div>

<style>
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
</style>
