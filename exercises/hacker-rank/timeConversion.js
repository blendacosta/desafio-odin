function timeConversion(s) {
    let newTime = '';
    let hours = s.slice(0,2);
    const AM = s.slice(-2) === 'AM';
    if (AM) {
        hours === '12'? newTime+='00' : newTime+=hours;
    } else {
        hours === '12'? newTime+='12' : newTime+=parseInt(hours)+12;
    }
    newTime+= s.slice(2,8);
    return newTime;
}