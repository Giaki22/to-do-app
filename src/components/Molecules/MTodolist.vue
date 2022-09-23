<template>
  <div class="to-do light-green darken-1 rounded-lg justify-center">
    <v-row class="d-flex justify-center align-center">
        <v-col cols="9">
            <v-text-field label="Aggiungi task" v-model="newTask" @keyup.enter="addTask"></v-text-field>
        </v-col>
        <v-col cols="1">
            <v-btn @click="addTask" color="success" class=" addButton light-green darken-3">Aggiungi</v-btn>
        </v-col>
    </v-row>
    <transition-group name="fade" class="d-flex flex-column px-5">
        <v-card class="my-5 pa-5 text-center" color="success" v-for="(task, index) in taskList" :key="task.taskName" :class="{archived : task.taskArchived}">
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
    <v-row>
      <v-col class="d-flex justify-center my-5">
        <v-btn class="primary" @click="()=>$router.push('archived')">Guarda i ToDo Archiviati</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>


export default {
    name: "MTodolist",
    data(){
        return {
            newTask: ""
        }
    },
    methods: {
        addTask() {
            if(this.newTask.trim().length !== 0) {
                this.$store.state.tasks.push({taskName: this.newTask, taskCompleted: false, taskArchived: false});
                this.newTask = "";
            }
        },
        deleteTask(index) {
            this.$store.state.tasks.splice(index, 1)
        }
    },
    computed: {
        taskList() {
            return this.$store.state.tasks;
        },
    }
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