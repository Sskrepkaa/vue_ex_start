

<template>
        <div class="post">
            <div>
                <div>id: {{post.id}}</div>
                <div>name: {{post.title}}</div>
                <div>descr: {{post.body}}</div>
            </div>
            <div class="post_btn">
                <uiButton @click="this.$router.push(`/posts/${post.id}`)">Open</uiButton>
                <uiButton @click="$emit('remove', post)">Delete</uiButton>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .post {
    padding: 15px;
    border: 1px solid black;
    border-radius: 25px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .post_btn {
        display: flex;
        margin-left: 10px;
    }
</style>