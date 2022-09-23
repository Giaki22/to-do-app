<template>
  <div class="task green lighten-2 rounded-xl pa-2 d-flex align-center">
    <div class="task-name">{{taskName}}</div>
    <div class="task-actions">

    </div>
  </div>
</template>

<script>
export default {
name: "ATask",
props:{
    taskName: String,
}
}
</script>

<style>
.task{
    width: 100%;
    height: 40px;
}
</style>