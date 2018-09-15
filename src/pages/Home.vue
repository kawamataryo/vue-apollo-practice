<template>
  <div>
    <!--メインビジュアル-->
    <HomeMainVisual></HomeMainVisual>
    <Breadcrumbs/>
    <!--コンテンツ-->
    <v-content>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <Article
              v-for="post in postList"
              v-bind:key="post"
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
  import Breadcrumbs from "@/components/Breadcrumbs";

  export default {
    name: 'Home',
    components: {
      Breadcrumbs,
      HomeMainVisual,
      Article,
    },
    data() {
      return {};
    },
    computed: {
      postList() {
        return this.$store.state.postList;
      },
    },
  }
</script>
