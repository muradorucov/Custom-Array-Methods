//map
Array.prototype.customMap = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
}

const mappedNumbers = [1, 2, 3].customMap((num) => num * 2);

console.log("Map Mehtod result: ", mappedNumbers); // [2, 4, 6]





//some




//every
Array.prototype.everyMethod = function (cb) {
    const result = [];
    let item = 0;
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
        if(cb(this[i])){
            item++
        }    
    }  
    if(item==this.length){ 
        return true
    }else{
        return false
    }
}

const everyNumbers = [4, 2, 7, 8, 1, 3].everyMethod((num) => num < 5 )

console.log("Every Mehtod result: ", everyNumbers);





//filter
Array.prototype.filterMethod = function (cb) {
    const result = [];
    const filterArr=[];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
        if(cb(this[i])){
            filterArr.push(this[i])
        }    
    }
    return filterArr
}

const filterNumbers = [4, 2, 7, 8, 1, 3].filterMethod((num) => num < 5 )

console.log("Filter Mehtod result: ", filterNumbers);

//reduce
//forEach
Array.prototype.forEachMethod = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    for (let index = 0; index < result.length; index++) {
        return result[index];

    }
}

const foreachNumbers = [1, 2, 3].forEachMethod((num) => {
    console.log("ForEach Mehtod result: ", num)  // 1, 2, 3
});

//flat
//reverse
//join
//includes.