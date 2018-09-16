import Vue from 'vue'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

Vue.use(VueApollo)

export default new VueApollo({
  defaultClient: new ApolloClient({
    uri: "https://api-apeast.graphcms.com/v1/cjm4hntq503cx01bnuw79gnov/master"
  }),
  defaultOptions: {
    $loadingKey: 'loading'
  },
  connectToDevTools: true
})

