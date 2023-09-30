

<template>
    <div v-if="posts.length > 0">
        <h3>List of something</h3>
        <Pitem 
            v-for="post in posts" 
            :post = "post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
    </div>
    <h2 v-else style="color: red;">Empty list</h2>
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