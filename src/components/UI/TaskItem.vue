<template>
    <li class="task">
        <div>
            <i class="fa fa-check-square btn-done" aria-hidden="true"></i>
            {{ task.description }}
        </div>
        <i class="fa fa-trash-o btn-trash" aria-hidden="true"></i>
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
    font-size: 25px;
    margin-right: 20px;
    transition: all .2s;
}
.btn-done:hover{
    color: rgba(9, 255, 9, 0.548);
}
.btn-trash {
    font-size: 25px;
    transition: all .2s;
}
.btn-trash:hover{
    color: rgb(240, 54, 54);
}
</style>