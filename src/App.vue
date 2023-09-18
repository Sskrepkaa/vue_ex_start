<script>
import Pform from "@/components/pform.vue";
import Plist from "@/components/plist.vue";
//import pform from "./components/pform.vue";


export default {

  components: {
    Plist, Pform
  },

  data() {
    return {
      likes: 4,
      posts: [
        {id:1, name: 'qwe', body: 'asdfghjkl'},
        {id:2, name: 'qwe2', body: 'lkjhgfdsa'},
        {id:3, name: 'qwe3', body: 'mnbvcx'},
      ],
    }
  },
  methods: {
  addLike() {
    this.likes++
  },
  createP(post) {
    console.log(post);
    this.posts.push(post);
  }
  }
}
</script>
//-------------------------------------------------------------------------------
<template>
    <div>
      <div>
        <button @click="addLike">Like</button>
      </div>
      <div>
        count likes: {{likes}}
      </div>
    </div>
  
  <div>
    <Pform
      @create="createP"
    />
    <Plist 
      :posts="posts"
      
    />
  </div>
</template>

<style>


button {
  
  color: white;
  background-color: darkorchid;
  padding: 10px;
  border-radius: 10px;
  
}
</style>
