function kangaroo(x1, v1, x2, v2) {
    if (v2 < v1) {
        if ((x1 - x2) % (v2 - v1) == 0) {
            return "YES";
        }
    }
    return "NO";
}