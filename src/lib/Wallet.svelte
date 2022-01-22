<script>
  export let signer

  $: signerAddress = signer?.getAddress()

  const shortenAddress = (address) => {
    if (!address) return 'connect to metamask'

    const split = address.split('')
    split.splice(5, split.length - 9, '...')

    return split.join('')
  }
</script>

<div>
  {#await signerAddress}
    <p>loading your wallet</p>
  {:then result}
    <p title={result}>wallet: {shortenAddress(result)}</p>
  {/await}
</div>
