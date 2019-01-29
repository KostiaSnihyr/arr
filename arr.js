var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = dd + '/' + mm + '/' + yyyy;

let arr = [
    {fullName : {surname : 'xxx', firstName : 'yyy', middleName: 'zzz', data : {xxx: 'Boom0'}}}, 
    {fullName : {surname : 'XXX', firstName : 'YYY', middleName: 'ZZZ', data : {xxx: 'Boom1'}}},
    {fullName : {surname : true, firstName : 10, middleName: today, data : {xxx: 'Boom2'}}},
    {fullName : {surname : 'aaa', firstName : today, middleName: 102, data : {xxx: 'Boom3'}}},
    {fullName : {surname : 'XXX', firstName : 'YYY', middleName: {xxx: 'Boom'}, data : {xxx: 'Boom4'}}}
]
let boolObj = {fullName : {surname : true, firstName : true, middleName: false, data : {xxx: true}}}
let loc = {"fullName.surname" : "Прізвище", "fullName.middleName" : "По-батькові"}

let newArr = [];

let keysLoc = Object.keys(loc);
// console.log(keysLoc);
let objObjKeys = Object.keys(Object.values(arr[0])[0]);

let arrObjObjKeys = Object.keys(Object.values(arr[0])[0]);
let arrObjObjValues = Object.values(Object.values(arr[0])[0]);

strArr = []
objObjKeys.forEach(function(element) {
    strArrKeys = `${Object.keys(arr[0])}.${element}`;
    strArr.push(strArrKeys);
})

createEmptyObj = () => {
    for (let k = 0; k < Object.keys(Object.values(arr[0])[0]).length; k++) {
        newArr.push({});
    }
}
createEmptyObj();

for (let i = 0; i < arr.length; i++) {

    let arrObjObjKeys = Object.keys(Object.values(arr[i])[0]);
    let arrObjObjValues = Object.values(Object.values(arr[i])[0]);
    let boolObjValues = Object.values(Object.values(boolObj)[0]);
    let ojbStr = `value${i+1}`


    for(let j = 0; j < arrObjObjKeys.length; j++) {
        if(boolObjValues[j] === true || Object.values(boolObjValues[j])[0] === true) {
            newArr[j][ojbStr] = arrObjObjValues[j];
            let str = `${Object.keys(arr[0])}.${arrObjObjKeys[j]}`;
            // console.log(str);

            if(str === keysLoc[0]) {
                newArr[j]['name'] = loc[keysLoc[0]];
            } else if (str === keysLoc[1]) {
                newArr[j]['name'] = loc[keysLoc[1]];
            } else if (str === keysLoc[2]) {
                newArr[j]['name'] = loc[keysLoc[2]];
            } else if (str === keysLoc[3]) {
                newArr[j]['name'] = loc[keysLoc[3]];
            } else if (str === keysLoc[4]) {
                newArr[j]['name'] = loc[keysLoc[4]];
            } else {
                newArr[j]['name'] = strArr[j];
            }   
        }
    }
}

console.log(newArr);