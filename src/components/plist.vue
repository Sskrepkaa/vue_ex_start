

<template>
    <div>
        <h3>List of something</h3>
        <Pitem 
            v-for="post in posts" 
            :post = "post"
        />
    </div>
</template>

<script>
import Pitem from './pitem.vue';


export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { Pitem }
}
</script>

<style scoped>
    
</style>