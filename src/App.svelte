<script>
  import { ethers } from 'ethers'
  import { onMount } from 'svelte'

  import logo from './assets/mint.png'
  import Wallet from './lib/Wallet.svelte'
  import Minter from './lib/Minter.svelte'

  onMount(async () => {
    if ('ethereum' in window) {
      isEtherPresent = true

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      
      console.log(provider, {isEtherPresent})

      await provider.send('eth_requestAccounts', [])

      signer = provider.getSigner()
    }
  })

  let isEtherPresent = false
  let signer = null
</script>

<main class="bg-white min-h-screen">
  <div class="header">
    <img src={logo} alt="Mint Logo" />
    <h1>Mint</h1>
  </div>

  <Minter />

  {#if isEtherPresent}
    <Wallet {signer} />
  {:else}
    <p>Get metamask</p>
  {/if}
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }

  img {
    height: 4rem;
  }

  h1 {
    color: #1d3e1c;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    max-width: 14rem;
    margin: 0 1rem;

    text-align: start;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
      text-align: center;
    }

    .header {
      margin: 2rem auto;
    }

    p {
      max-width: none;
    }
  }
</style>
