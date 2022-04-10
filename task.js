


function compareArrays(arr1, arr2){
  let result;
  if (arr1.length !== arr2.length){
   return false;
  } else
    result = arr1.every((item, idx) => item === arr2[idx]);
    return result;
}
  
function advancedFilter(arr) {
  let resultFilter = arr.filter((item) => item >= 0).filter((item) => item % 3 === 0);
  let resultMap = resultFilter.map((item) => item * 10);
   return resultMap;
}
 

