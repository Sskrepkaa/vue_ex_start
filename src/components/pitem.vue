

<template>
        <div class="post">
            <div>
                <div>name: {{post.name}}</div>
                <div>descr: {{post.body}}</div>
            </div>
            <div class="post_btn">
                <button>Delete</button>
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
</style>