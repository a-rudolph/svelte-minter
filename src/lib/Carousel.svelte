<script>
</script>

<div class="carousel-wrap">
    <slot class='item-wrap'></slot>
</div>

<style>

    .carousel-wrap {
        display: flex;
        flex-wrap: nowrap;

        overflow-x: scroll;
    }
    .item-wrap {
        padding: 8px;
    }
</style>
