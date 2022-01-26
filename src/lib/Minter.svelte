<script>
  import MintCard from './MintCard.svelte'

  import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

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

  let current = getId()

  let mintedIds = [current]

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
  <div class="w-full flex flex-wrap justify-center sm:justify-start">
    {#each mintedIds as id, i (id)}
      <div
        in:receive="{{key: id}}"
        out:send="{{key: id}}"
        animate:flip="{{duration: 200}}"
      >
        <MintCard
          {id}
          {onMint}
          isMinted={i > 0}
          tag="{mintedIds.length - i}/{possibilities}"
        />
      </div>
    {/each}
  </div>
</div>

