<script>
  import { ethers } from 'ethers'
  import { onMount } from 'svelte'

  import logo from './assets/mint.png'
  import Counter from './lib/Counter.svelte'
  import Wallet from './lib/Wallet.svelte'
  import Token from './lib/Token.svelte'

  onMount(async () => {
    if ('ethereum' in window) {
      isEtherPresent = true

      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      await provider.send('eth_requestAccounts', [])

      signer = provider.getSigner()
    }
  })

  let isEtherPresent = false
  let signer = null
</script>

<main>
  <img src={logo} alt="Mint Logo" />
  <h1>Start Minting!</h1>

  <Counter />
  <Token />

  {#if isEtherPresent}
    <Wallet {signer} />
  {:else}
    <p>Get metamask</p>
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
  }

  h1 {
    color: #1d3e1c;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
