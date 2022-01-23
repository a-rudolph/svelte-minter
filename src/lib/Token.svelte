<script>
  const base = '/layers/base.png'
  const mouth = '/layers/mouth-1.png'
  const nose = '/layers/nose-1.png'
  const eyes = '/layers/eyes-1.png'
  const hair = '/layers/hair-1.png'
  const ears = '/layers/ears-1.png'
  const neck = '/layers/neck-1.png'
</script>

<div class="row">
  <div class="wrapper">
    <img src={base} alt="base" />
    <img src={mouth} alt="mouth" />
    <img src={nose} alt="nose" />
    <img src={eyes} alt="eyes" />
    <img src={hair} alt="hair" />
    <img src={ears} alt="ears" />
    <img src={neck} alt="neck" />
  </div>
</div>

<style>
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  .wrapper {
    position: relative;

    height: 320px;
    width: 320px;

    border-radius: 5px;
    background-color: bisque;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 100%;
  }
</style>
