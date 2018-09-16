<template>
  <div>
    <!--メインビジュアル-->
    <HomeMainVisual></HomeMainVisual>
    <!--コンテンツ-->
    <v-content>
      <div v-if="loading" class="text-xs-center">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
      </div>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <Article
              v-for="post in posts"
              v-bind:key="post.id"
              :post=post
          ></Article>
        </v-layout>
      </v-container>
      <!--フッター-->
    </v-content>
  </div>
</template>

<script>
  import HomeMainVisual from '@/components/HomeMainVisual'
  import Article from '@/components/Article'
  import {ALL_POSTS} from "@/constants/graphql";


  export default {
    name: 'Home',
    components: {
      HomeMainVisual,
      Article,
    },
    data() {
      return {
        loading: 0,
      };
    },
    apollo: {
      posts: ALL_POSTS
    }
  }
</script>
