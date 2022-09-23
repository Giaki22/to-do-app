<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="9">
        <v-text-field label="Scrivi il tuo Nickname" v-model="newUser"></v-text-field>
    </v-col>
    <v-col cols="1">
        <router-link to="/">
            <v-btn @click="logUser" color="success" class=" addButton light-green darken-3">Aggiungi</v-btn>
        </router-link>
    </v-col>
    </v-row>
</template>

<script>
export default {
    name: "MLoginPage",
    data(){
        return {
            newUser: ""
        }
    },
    computed:{
        logUser(){
            if(this.newUser.trim().length !== 0) {
                this.$store.state.activeUser = this.newUser;
            }
        }
    }
}
</script>

<style scoped>

</style>