function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}



export {
    unpack
}
