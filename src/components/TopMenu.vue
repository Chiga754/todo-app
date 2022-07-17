<template>
    <div class="secton__date">
        <div>Saturday, June 1</div>
        <div class="active-tasks">3 Active Task</div> 
    </div>

    <div class="">
        <a href="#" class="">Incomplete Tasks</a>
        <a href="#">Complete Tasks</a>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .secton__date{
        color: #ffffff;
        font-size: 20px;
    }
    a{
        color: #d1d1d1d5;
        text-decoration: none;
        margin-left: 70px;
        font-size: 18px;
        transition: all .5s;
    }
    a:hover{
        color: #ffffff;
    }
    .active{
        color: #ffffff;
    }   
    .active-tasks{
        font-size: 16px;
        color: rgb(0, 204, 255);;
    }
</style>