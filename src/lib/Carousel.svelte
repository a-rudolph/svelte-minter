<script>
</script>

<div class="carousel-wrap">
    <slot></slot>
</div>

<style>
    .carousel-wrap {
        display: flex;
        flex-wrap: nowrap;

        overflow-x: scroll;
    
        padding: calc(20vw - 1rem - 1em);
    }

    @media (min-width: 400px) {
        .carousel-wrap {
        
        padding: 0;
        }
  }

    .item-wrap {
        padding: 8px;
    }
</style>
