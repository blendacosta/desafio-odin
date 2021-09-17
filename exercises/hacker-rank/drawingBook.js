function pageCount(n, p) {
    let pages = Math.floor(n/2);
    let ascendingPagination = Math.floor(p/2);
    let descendingPagination = pages - ascendingPagination;

    return Math.min(ascendingPagination, descendingPagination);
}