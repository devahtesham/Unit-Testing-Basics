const cloneArr = require("../clone-array")
const array = [10, 20, 30]
test("return a copy of given array",()=>{
    // expect(cloneArr(array)).toBe(array)  // strict mather , it will fail because array is a reference type
    expect(cloneArr(array)).toEqual(array)  // loose matching, only see the values are same or not 
})