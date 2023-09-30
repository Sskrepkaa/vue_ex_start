<script>
import Pform from "@/components/pform.vue";
import Plist from "@/components/plist.vue";
import UiButton from "./components/UI/uiButton.vue";
//import pform from "./components/pform.vue";


export default {

  components: {
    Plist, Pform,
    UiButton
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
  },
  removeP(post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
  },
  }
}
</script>
//-------------------------------------------------------------------------------
<template>
    <div>
      <div>
        <UiButton @click="addLike">Like</UiButton>
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
      @remove="removeP"
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
