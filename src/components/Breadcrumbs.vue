<template>
  <div>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
          v-for="item in items"
          :key="item.text"
          :disabled="item.disabled"
          :href="item.to"
          router
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumbs",
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          to: "/"
        },
        {
          text: 'Article',
          disabled: false,
          to: "/detail"
        }
      ]
    })
  }
</script>

<style scoped>

</style>