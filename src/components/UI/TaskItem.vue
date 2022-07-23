<template>
    <li v-if="task.show" class="task" :class="{completed : task.completed}">
        <div>
            <i 
                class="btn-done fa fa-check-square" 
                aria-hidden="true"
                @click="$emit('completed', task)">
            </i>
            {{ task.description }}
        </div>
        <i 
            class="btn-trash fa fa-trash-o" 
            aria-hidden="true"
            @click="$emit('remove', task)">
        </i>
    </li>
</template>

<script>
export default {
    props: {
        task : {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
.task {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
}
li {
    color: #ffffff;
    border-bottom: 1px solid gray ;
    position: relative;
    cursor: pointer;
    transition: all .3s;
    display: flex;
    align-items: center;
}
li:hover {
  background: rgba(0, 204, 255, 0.493);
}
.btn-done {
    font-size: 25px !important;
    margin-right: 20px;
    transition: all .2s;
}
.btn-done:hover{
    color: rgba(9, 255, 9, 0.548);
}
.btn-trash {
    font-size: 25px !important;
    transition: all .2s;
}
.btn-trash:hover{
    color: rgb(240, 54, 54);
}
.completed {
    background: rgba(9, 255, 9, 0.548);
}
</style>