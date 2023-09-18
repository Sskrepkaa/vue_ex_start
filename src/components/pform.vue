<template>
  <div>
    <form @submit.prevent action="" style="margin-bottom: 25px;">
      <h2>Add post</h2>

      <input 
        v-bind:value="post.titel" 
        @input="post.titel = $event.target.value" 
        class="input" 
        type="text" 
        placeholder="name">

//v-model = vbind + input
      <input 
        v-model="post.body"    
        class="input" 
        type="text" 
        placeholder="body">

      <button class="btn" @click="createP">Add</button>
    </form>
  </div>  
</template>

<script>
export default {
    data() {
        return {
            post: {
                titel: "",
                body: ""
            }
        }
    },
    methods: {
        createP() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                titel: "",
                body: ""
            }
        }
    }
}
</script>

<style scoped>
    .input {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
}

.btn {
    width: 35%;
}
</style>