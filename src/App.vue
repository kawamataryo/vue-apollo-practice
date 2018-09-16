<template>
  <v-app>
    <!--ヘッダーナビゲーション-->
    <Navbar/>
    <!--コンテンツ-->
    <transition name="fade">
      <router-view/>
    </transition>
    <!--フッター-->
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
