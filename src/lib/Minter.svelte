<script>
  import MintCard from './MintCard.svelte'

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

  const getPiece = (key) => {
    const max = maxis[key]
    const n = getN(max)

    return `${key}-${n}`
  }

  const getId = () => {
    const keys = Object.keys(maxis)

    return keys.map(getPiece).join(':')
  }

  let mintedIds = []

  const onMint = () => {
    const id = getId()
    mintedIds = [id, ...mintedIds]
  }
</script>

<div>
  <p>
    {possibilities} possible tokens
  </p>
  <div class="w-full flex">
    <MintCard {onMint} />
    {#each mintedIds as id (id)}
      <MintCard {id} isMinted />
    {/each}
  </div>
</div>

