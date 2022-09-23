<template>
  <div class="to-do light-green darken-1 rounded-lg justify-center">
    <v-row class="d-flex align-center">
      <v-col class="d-flex justify-center my-5" cols="5">
        <v-btn class="primary" @click="()=>$router.push('/')">Torna alla lista</v-btn>
      </v-col>
      <v-col class="d-flex justify-center my-5 px-5" cols="6">
        <v-select v-model="selectedUser" :items="this.userList"></v-select>
      </v-col>
    </v-row>
    <transition-group name="fade" class="d-flex flex-column px-5">
        <v-card class="my-5 pa-5 text-center" color="success" v-for="(task, index) in taskList" :key="task.taskName" v-if="task.taskArchived && task.createdBy == selectedUser">
            <v-row class="d-flex justify-space-between">
                <v-cols cols="8">
                    <v-list-item-title class="headline mb-1" :class="{done : task.taskCompleted}">{{task.taskName}}</v-list-item-title>
                </v-cols>
                <v-cols cols="4">
                    <span>creato da: {{task.createdBy}}</span>
                    <v-btn icon color="green darken-4" @click="task.taskCompleted = !task.taskCompleted">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn icon color="yellow" @click="modifyTask(index)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon color="blue" @click="task.taskArchived = !task.taskArchived">
                        <v-icon>mdi-folder</v-icon>
                    </v-btn>
                    <v-btn icon color="red" @click="deleteTask(index)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-cols>
            </v-row>
        </v-card>
    </transition-group>
  </div>
</template>

<script>
import { onMounted } from 'vue';


export default {
    name: "MTodolist",
    data(){
        return{
            selectedUser: "",
        }
    },
    methods: {
        deleteTask(index) {
            this.$store.state.tasks.splice(index, 1)
        }
    },
    computed: {
        taskList() {
            return this.$store.state.tasks;
        },
        userList() {
            let list = [];
            this.$store.state.tasks.forEach((element) => {
                if (!(list.includes(element.createdBy))) {
                    list.push(element.createdBy)
                }
            })
            return list;
        }
    },
}
</script>

<style>
.to-do{
    overflow: hidden;
}
.addButton{
    color: white;
    font-weight: bold;
}
.done{
    text-decoration: line-through;
}
.archived{
    display: none;
}
</style>