<template>
  <div>
    <!--メインビジュアル-->
    <section>
      <v-parallax :src="post.thumbnail.url" height="600">
        <v-layout
            column
            align-center
            justify-center
            class="white--text"
        >
          <h1 class="white--text mb-2 display-3 text-xs-center">{{post.title}}</h1>
          <p class="white-text text-xs-center">{{ post.description }}</p>
        </v-layout>
      </v-parallax>
    </section>
    <!--コンテンツ-->
    <v-content>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 md8>
            <vue-markdown :source="post.content"></vue-markdown>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import Article from '@/components/Article'
  import {FEACH_POST_BY_ID} from "@/constants/graphql";
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'Detail',
    components: {
      Article,
      VueMarkdown,
    },
    data() {
      return {
        loading: 0,
      };
    },
    apollo: {
      post: {
        query: FEACH_POST_BY_ID,
        variables() {
          // Use vue reactive properties here
          return {
            id: this.$route.params.id,
          }
        },
      }
    }
  }
</script>

<style>
  .v-parallax__image {
    opacity: 1!important;
  }
</style>
