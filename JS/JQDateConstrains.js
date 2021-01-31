function dateConstrain(minYearsOffset, maxYearsOffset) {
    if (isNaN(minYearsOffset || minYearsOffset < 0)) {
        minYears = 0;
    }
    if (isNaN(maxYearsOffset || maxYearsOffset < 0)) {
        maxYears = 0;
    }
    let a = new Date();
    let minYear = a.getFullYear() + minYearsOffset;
    let maxYear = a.getFullYear() + maxYearsOffset;
    let month = a.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    let day = a.getDate();
    if (day < 10) {
        day = `0${day}`
    }
    let dates = $("input[type = 'date']");

    for (var i of dates) {
        i.min = `${minYear}-${month}-${day}`;
        i.max = `${maxYear}-${month}-${day}`;
    }
}