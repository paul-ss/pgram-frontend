<template>
  <div class="container is-max-desktop">
    <PostCardItem 
        v-for="post in posts" 
        :seen = true
        :key="post.id"
        :id="post.id"
        :first_name ="post.first_name"
        :last_name ="post.last_name"
        :text="post.text" 
        @btn-click = "onClick" 
    >
    </PostCardItem>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import {get} from '../services/http'
import PostCardItem from './PostCardItem.vue'

export default defineComponent({
    data: function() {
      return {
         posts: []
      }
    },

    created: function() {
        get("http://localhost:3000/posts")
        .then((val) => {
          this.posts = val
        })
        .catch(err => {alert(err); this.posts = []})
    },
    components: {
        PostCardItem,
    },
    methods: {
      onClick(id) {
          this.posts[id].first_name = "1212"
      }
    }
})
</script>