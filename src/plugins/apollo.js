import Vue from 'vue'
import VueApollo from "vue-apollo"
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

const GRAPHCMS_API = "https://api-euwest.graphcms.com/v1/cjlk8ny4507ca01bv4owmdlw1/master"

const apolloClient = new ApolloClient({
  link: new HttpLink({uri: GRAPHCMS_API}),
  cache: new InMemoryCache()
})

Vue.use(VueApollo)

export default new VueApollo({
  defaultClient: apolloClient
})
