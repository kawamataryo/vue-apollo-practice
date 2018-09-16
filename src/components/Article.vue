<template>
  <v-flex xs12 sm6 md4>
    <article>
      <v-hover>
        <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
        >
          <v-img
              class="white--text"
              height="170px"
              :src=post.thumbnail.url
          >
            <v-expand-transition>
              <a
                  v-bind:href="'/post/' + post.id"
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-1 white--text"
                  style="height: 100%;"
              >
                  Read More
              </a>
            </v-expand-transition>
          </v-img>
          <v-card-title>
            <div>
              <h2>{{ post.title }}</h2>
              <span class="grey--text">{{ post.createdAt | moment }}</span><br>
              <span>{{ post.description }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn icon class="red--text">
              <v-icon medium>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text">
              <v-icon medium>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon medium>fa-facebook</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="blue" :to="'/post/' + post.id">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </article>
  </v-flex>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "Article",
    props: ['post'],
    filters: {
      moment: function (date) {
        return moment(date).format('YYYY-MM-DD');
      }
    },

  }
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>