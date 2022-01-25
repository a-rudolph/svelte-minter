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

    const id = keys.map(getPiece).join(':')

    if (idsMinted[id]) return null

    idsMinted[id] = 1
    return id
  }

  const idsMinted = {}
  let mintedIds = []

  const onMint = () => {
    const id = getId()

    if (!id) return

    mintedIds = [id, ...mintedIds]
  }

  $: areMintablesLeft = mintedIds.length < possibilities
</script>

<div>
  <p>
    {mintedIds.length} / {possibilities} possible tokens
  </p>
  <div class="w-full flex flex-wrap">
    {#if areMintablesLeft}
    <MintCard {onMint} />      
    {/if}
    {#each mintedIds as id, i (id)}
      <MintCard {id} isMinted tag="{mintedIds.length - i}/{possibilities}" />
    {/each}
  </div>
</div>

