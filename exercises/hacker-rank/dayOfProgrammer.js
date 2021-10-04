const dayOfProgrammer = (year) => {
    if (year === 1918) {
        return (`26.09.1918`);
    } else if (year > 1918) {
        const isLeapYear = (year%4 === 0) && (year%100 !== 0) || year%400 === 0;
        return (`${isLeapYear? 12 : 13}.09.${year}`);
    } else {
        return (`${year%4 === 0 ? 12 : 13}.09.${year}`);
    }
}

console.log(dayOfProgrammer(2000))