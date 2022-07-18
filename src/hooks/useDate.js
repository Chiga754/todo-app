import { onMounted, ref } from "vue";

export function useDate() {
    const dayOfWeek = ref('Не найдено');
    const month = ref('Январь');
    const day = ref(1);
    function getDate() {
        const date = new Date();
        getDayOfWeekStr(date.getDay());
        getMonth(date.getMonth());
        day.value = date.getDate();
    }

    function getDayOfWeekStr( num ) {
        switch (num) {
            case 0:
                dayOfWeek.value = 'Восскресенье';
                break;
            case 1:
                dayOfWeek.value = 'Понедельник';
                break;
            case 2:
                dayOfWeek.value = 'Вторник';
                break;
            case 3:
                dayOfWeek.value = 'Среда';
                break;
            case 4:
                dayOfWeek.value = 'Четверг';
                break;
            case 5:
                dayOfWeek.value = 'Пятница';
                break;
            case 6:
                dayOfWeek.value = 'Суббота';
                break;
            default:
                break;
        }
    }

    function getMonth( num ) {
        switch (num) {
            case 0:
                dayOfWeek.value = "Январь";
                break;
            case 1:
                dayOfWeek.value = "Февраль";
                break;
            case 2:
                dayOfWeek.value = "Март";
                break;
            case 3:
                dayOfWeek.value = "Апрель";
                break;
            case 4:
                dayOfWeek.value = "Май";
                break;
            case 5:
                dayOfWeek.value = "Июнь";
                break;
            case 6:
                dayOfWeek.value = "Июль";
                break;
            case 7:
                dayOfWeek.value = "Август";
                break;
            case 8:
                dayOfWeek.value = "Сентябрь";
                break;
            case 9:
                dayOfWeek.value = "Октябрь";
                break;
            case 10:
                dayOfWeek.value = "Ноябрь";
                break;
            case 11:
                dayOfWeek.value = "Декабрь";
                break; 
            default:
                break;
        }
    }

    onMounted(getDate);

    return {
        dayOfWeek,
        month,
        day,
    }
}


