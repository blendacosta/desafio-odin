function gradingStudents(grades) {
    return grades.map((g) => {
        const diff = 5 - (g % 5);
        if (diff < 3 && g >= 38) {
            g += diff;
            return g;
        }
        return g;
    })
}