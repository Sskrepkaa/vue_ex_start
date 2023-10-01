<template>
    <div class="dialog" v-if="show" @click="close_dialog">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>


export default {
    name: 'uiDialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close_dialog() {
            this.$emit('update:show', false);
        },
    }
}
</script>

<style scoped>
    .dialog {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    .dialog__content {
        margin: auto;
        background: white;
        border-radius: 15px;
        min-height: 200px;
        padding: 20px;
    }
</style>