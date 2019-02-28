const nums = [1, 2, 3, 4]

const nums3 = nums.filter(function(x) {
    return x != 3;
}).map(function(x){
    return 'Item ' + x; 
});

console.log(nums3);