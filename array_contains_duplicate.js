// basicaly  check whether the array contains duplicate or not
// if yes return true else false

const containsDuplicate = (nums) => {
    const set = new Set(nums);
    return set.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1,1]));
console.log(containsDuplicate([1, 2, 3, 4]));

