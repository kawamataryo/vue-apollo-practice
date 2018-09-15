<template>
  <header>
    <v-toolbar
        app
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
        temporary
        :right=true
        v-model="rightDrawer"
        fixed
        app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
  export default {
    name: "Navbar",

    data() {
      return {
        title: "DemoBlog",
        rightDrawer: false,
      }
    }
  }
</script>

<style scoped>

</style>