<template>
    <div class="navbar">
        <div @click="$router.push('/')" >Vue3</div>
        <div class="nav_btns">
            <uiButton @click="$router.push('/store')" >Posts with store</uiButton>
            <uiButton style="margin-left: 10px;" @click="$router.push('/posts')" >Posts</uiButton>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .navbar {
        height: 50px;
        background-color: rgb(236, 142, 251);
        display: flex;
        align-items: center;
        padding: 0 2rem;

    }
    .nav_btns {
        margin-left: auto;
    }
</style>