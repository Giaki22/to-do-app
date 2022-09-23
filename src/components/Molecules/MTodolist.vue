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
        <v-card class="my-5 pa-5 text-center" color="success" v-for="(task, index) in this.tasks" :key="task.taskName">
            <v-row class="d-flex justify-space-between">
                <v-cols cols="8">
                    <v-list-item-title class="headline mb-1" :class="{done : task.taskCompleted}">{{task.taskName}}</v-list-item-title>
                </v-cols>
                <v-cols cols="4">
                    <v-btn icon color="green darken-4" @click="task.taskCompleted = !task.taskCompleted">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn icon color="yellow" @click="modifyTask(index)">
                        <v-icon>mdi-pencil</v-icon>
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


export default {
    name: "MTodolist",
    data(){
        return {
            tasks: [
                {
                    taskName: "Fare la Spesa",
                    taskCompleted: false,
                    taskArchived: false,
                }
            ],
            newTask: ""
        }
    },
    methods: {
        addTask() {
            if(this.newTask.trim().length !== 0) {
                this.tasks.push({taskName: this.newTask, taskCompleted: false, taskArchived: false});
                this.newTask = "";
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        }
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
</style>