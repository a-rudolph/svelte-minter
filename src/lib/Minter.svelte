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

    return id
  }

  let idsMinted = {}
  const first = getId()
  let minedIds = [first]

  const onMint = (id) => {
    idsMinted = {
      ...idsMinted,
      [id]: 1,
    }
    mineNewToken()
  }

  const mineNewToken = () => {
    const newId = getId()

    if (idsMinted[newId]) {
      return
    }

    minedIds = [newId, ...minedIds]
  }
</script>

<div>
  <p>
    {possibilities} possible tokens
  </p>
  <div class="w-full flex flex-wrap justify-center sm:justify-start">
    {#each minedIds as id, i (id)}
      <div
        in:receive="{{key: id}}"
        out:send="{{key: id}}"
        animate:flip="{{duration: 400, delay: 400}}"
      >
        <MintCard
          {id}
          {onMint}
          isMinted={idsMinted[id]}
          tag="{minedIds.length - i}/{possibilities}"
        />
      </div>
    {/each}
  </div>
</div>

