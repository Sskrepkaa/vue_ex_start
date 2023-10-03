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
  <h1>Post List:</h1>
  <div class="appBtn">
    <UiButton @click="dialogVisible=true">Create post</UiButton>
    <uiSelect
        v-model="selectedSort"
        :options="sortOptions"
    />
  </div>
  
  <uiDialog v-model:show="dialogVisible">
    <Pform
    @create="createP"
  />
  </uiDialog>

  <h2 class="load" v-if="isLoad">Loading...</h2>
  <Plist 
    :posts="posts"
    @remove="removeP"
    v-else
  />
  
</div>
</template>

<script>
import Pform from "@/components/pform.vue";
import Plist from "@/components/plist.vue";
import UiButton from "./components/UI/uiButton.vue";
//import pform from "./components/pform.vue";
import axios from "axios";


export default {

  components: {
    Plist, Pform,
    UiButton
},

  data() {
    return {
      likes: 4,
      posts: [
      ],
      dialogVisible: false,
      isLoad: false,
      selectedSort: '',
      sortOptions: [
        {value: 'titel', name: 'by name'},
        {value: 'body', name: 'by desc'},
      ]
    }
  },
  methods: {
  addLike() {
    this.likes++
  },
  createP(post) {
    console.log(post);
    this.posts.push(post);
    this.dialogVisible = false;
  },
  removeP(post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
  },

  async fetchPosts() {
    try {
      this.isLoad = true;
      setTimeout ( async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        console.log(res);
        this.posts = res.data;
        this.isLoad = false;
      }, 1000);
      
      
    }
    catch (e){
      alert('err')
    } finally {
      //this.isLoad = false;
    }
  },
  

  },

  mounted() {
    this.fetchPosts();
  },
}
</script>


<style>


button {
  
  color: white;
  background-color: darkorchid;
  padding: 10px;
  border-radius: 10px;
  
}
.load {
  color:rgb(203, 150, 3);
  display: flex;
  justify-content: center;
}
.appBtn {
  display: flex;
  justify-content: space-between;
}
</style>
