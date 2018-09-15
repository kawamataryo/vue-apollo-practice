<template>
  <v-app>
    <!--ヘッダーナビゲーション-->
    <Navbar/>
    <!--コンテンツ-->
    <router-view/>
    <!--フッター-->
    <ul>
      <li v-for="post in allPosts" :key="post.id"></li>
    </ul>
    <Fotter/>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Fotter from '@/components/Fotter.vue'
  export default {
    name: 'App',
    components: {
      Navbar,
      Fotter
    },
  }
</script>
