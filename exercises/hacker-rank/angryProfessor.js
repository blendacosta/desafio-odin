function angryProfessor(k, a) {
    const attendingStudents =  a.filter((t) => t <= 0);
    return attendingStudents.length < k? 'YES' : 'NO';
}

console.log(angryProfessor(3, [-1,-3,4,2])); // >> YES
console.log(angryProfessor(2, [-1,-3,4,2])); // >> NO
