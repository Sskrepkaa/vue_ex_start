<template>
  <div>
    <form @submit.prevent action="" style="margin-bottom: 25px;">
      <h2>Add post</h2>

      <uiiInput 
        v-model="post.title" 
         
        type="text" 
        placeholder="name"/>

<!--[ v-model = vbind + input ]-->
      <uiiInput 
        v-model="post.body"    
        
        type="text" 
        placeholder="body"/>

      <ui-Button class="btn" @click="createP">Add</ui-Button>
    </form>
  </div>  
</template>

<script>
//import uiButton from "@/components/UI/uiButton.vue"
export default {
  components: {
    
  },
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        }
    },
    methods: {
        createP() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: "",
                body: ""
            }
        }
    }
}
</script>

<style scoped>
    
.btn {
    width: 35%;
}

</style>