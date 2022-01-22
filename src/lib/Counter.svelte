<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #1d3e1c;
    background-color: #82c85f;
    border-radius: 2em;
    border: 2px solid #1d3e1c;
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:active {
    background-color: rgba(29, 62, 28, 0.2);
  }
</style>
