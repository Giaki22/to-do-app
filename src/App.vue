<template>
  <v-app id="inspire">

    <v-app-bar app class="green darken-4">
      <v-row class="d-flex justify-space-between mx-2">
        <v-toolbar-title>To Do List</v-toolbar-title>
        <v-btn @click="()=>$router.push('login')" class="warning">Login</v-btn>
      </v-row>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';

  export default {
    components: { Home }
}
</script>