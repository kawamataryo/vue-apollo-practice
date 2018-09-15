<template>
  <div>
    <!--メインビジュアル-->
    <section>
      <v-parallax :src="require('@/assets/hero.jpeg')" height="600">
        <v-layout
            column
            align-center
            justify-center
            class="white--text"
        >
          <h1 class="white--text mb-2 display-3 text-xs-center">Demo Blog</h1>
          <p class="wihte-text text-xs-center">Practice GraphCms, Graphql, Vue.js,
            Vuetify</p>
        </v-layout>
      </v-parallax>
    </section>
    <Breadcrumbs/>
    <!--コンテンツ-->
    <v-content>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 md8>
            <h1>ohgehogehoge</h1>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est eum illum impedit minus nihil sed. Architecto, aspernatur dolore ex fugit in omnis quae saepe totam, unde, velit voluptas voluptatem.</span><span>Amet facere hic magnam, odio saepe veniam? A animi asperiores culpa cumque deleniti ea facilis illo impedit laboriosam laudantium magni quibusdam, quod reiciendis rem tempora tenetur ullam vel voluptas voluptates.</span><span>Ab autem beatae consectetur dolore, ea eaque error eveniet excepturi fugit illo ipsa ipsam itaque iure laborum mollitia necessitatibus officia quaerat quas quo reiciendis rem reprehenderit suscipit ullam velit voluptatem.</span><span>Ad at blanditiis consequuntur, corporis culpa cupiditate deleniti eveniet explicabo harum itaque magnam mollitia, nobis non odio placeat porro possimus quae quasi quisquam tempore. Aliquid aut excepturi ipsa obcaecati quod.</span><span>Aspernatur atque impedit nemo nisi obcaecati sequi voluptas! In perspiciatis, reiciendis. Alias architecto consequatur delectus, dolor est hic impedit libero nam necessitatibus nulla perferendis perspiciatis qui recusandae sed voluptatibus? Hic!</span>
            </p>
            <h2>oge</h2>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae doloribus illum impedit iusto laudantium nobis obcaecati, provident quo, similique, sit temporibus veritatis voluptatum? Architecto cum eaque porro sint totam.</span><span>Ad aliquam blanditiis consequuntur culpa dicta dolore ea esse, est exercitationem explicabo harum illum in itaque laudantium libero magni modi mollitia necessitatibus quasi quos sapiente sed tempore tenetur ullam voluptas.</span>
            </p>
            <h3>oge</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae doloribus illum impedit iusto laudantium nobis obcaecati, provident quo, similique, sit temporibus veritatis voluptatum? Architecto cum eaque porro sint totam.</span><span>Ad aliquam blanditiis consequuntur culpa dicta dolore ea esse, est exercitationem explicabo harum illum in itaque laudantium libero magni modi mollitia necessitatibus quasi quos sapiente sed tempore tenetur ullam voluptas.</span>
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import Article from '../components/Article'
  import Breadcrumbs from "../components/Breadcrumbs";

  export default {
    name: 'Detail',
    components: {
      Breadcrumbs,
      Article,
    },
  }
</script>
