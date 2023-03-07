let timeStorage = [];

if(localStorage.getItem('timesArray')) {
    timeStorage = JSON.parse(localStorage.getItem('timesArray'));
}

export {timeStorage}; 