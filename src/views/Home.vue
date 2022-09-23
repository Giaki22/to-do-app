<template>
  <div class="home light-green darken-2 pa-3">
    <router-view/>
  </div>
</template>

<script>
import MTodolist from '../components/Molecules/MTodolist.vue';
// @ is an alias to /src

export default {
    name: "Home",
    data: {},
    components: { MTodolist }
}
</script>

<style scoped>
.home{
  height: 100%;
}
</style>