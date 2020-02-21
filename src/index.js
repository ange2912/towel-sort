
module.exports = function towelSort (matrix) {
 
  let sortMatrix = [];
  if (Array.isArray && matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse();
      }
      sortMatrix.push(matrix[i]);
    }

    let results = [];
    sortMatrix.forEach(i => {
      i.forEach(j => {
        results.push(j)
      })
    })
    return results
  } else return sortMatrix
}
