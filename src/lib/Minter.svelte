<script>
  import MintCard from './MintCard.svelte'

  import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { getId, possibilities } from '../utils/token';

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

  let idsMinted = {}
  const first = getId(idsMinted)
  let minedIds = [first]

  const onMint = (id) => {
    idsMinted = {
      ...idsMinted,
      [id]: 1,
    }
    mineNewToken()
  }

  const mineNewToken = () => {
    const newId = getId(idsMinted)

    if (idsMinted[newId]) {
      return
    }

    minedIds = [newId, ...minedIds]
  }
</script>

<div>
  <p>{possibilities} possible tokens</p>
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

