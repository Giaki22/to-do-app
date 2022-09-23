<template>
  <v-app id="inspire">

    <v-app-bar app class="green darken-4">
      <v-toolbar-title>To Do List</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
  export default {
    data: () => ({ drawer: null }),
    components: { Home }
}
</script>