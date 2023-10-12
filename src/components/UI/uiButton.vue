<template>
    <button class="btn">
        <slot>

        </slot>
    </button>
</template>

<script>
export default {
    name: 'uiButton'
}
</script>

<style scoped>
    .btn {
        padding: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-right: 15px;
    }
</style>