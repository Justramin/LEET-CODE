/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
   let out = [[1]];
    for (let i = 1; i < numRows; i++) {
        let prevRow = out[i - 1]; 
        let newRow = [1]; 
        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        newRow.push(1);
        out.push(newRow);
    }

    return out;
};