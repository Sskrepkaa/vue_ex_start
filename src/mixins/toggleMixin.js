export default {
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
    },
    mounted() {

    }

}