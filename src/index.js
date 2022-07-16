
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix!==undefined){
    var m=matrix.length;
    newMatrix=[];
     for(var i=1; i<m; i=i+2){
        newMatrix[i-1]=matrix[i-1];
        newMatrix[i]=matrix[i].reverse();
        newMatrix[i+1]=matrix[i+1];
    
    }
    row = [].concat.apply([], newMatrix);
    row = row.filter(function( element ) {
        return element !== undefined;})
    return row;}
else{return []}

}