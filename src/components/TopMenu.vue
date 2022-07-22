<template>
    <div class="wrapper">
        <div class="secton__date">
            <div>{{ `${dayOfWeek}, ${month} ${day} `}}</div>
            <div class="active-tasks">{{ getCompletedTasksNum() }} Active Task</div> 
        </div>

        <div class="">
            <a href="#" 
                :class="{active: sortedValue === 'incomplete'}" 
                @click.prevent="$emit('setCompleted', 'incomplete')

            ">Incomplete Tasks</a>
            <a href="#" 
                :class="{active: sortedValue === 'complete'}"
                @click.prevent="$emit('setCompleted', 'complete')"
            >Complete Tasks</a>
        </div>
    </div>
    

</template>

<script>
import { useDate } from '@/hooks/useDate';
export default {
    props: {
        tasks : {
            type: Array,
            requared: true,
        },
        sortedValue: {
            type: String,
        }
    },
    setup(props) {
        const {dayOfWeek, month, day} = useDate();

        return {
            dayOfWeek, month, day,
        }
    },
    methods: {
        getCompletedTasksNum() {
            return this.tasks.reduce((acc, task) => {
                if(!task.completed){acc++};
                return acc;
            }, 0);
        },
    }
}
</script>

<style scoped>
    .wrapper{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
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