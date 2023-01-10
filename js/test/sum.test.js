const sum = require("../sum")
// to test any function we use a method called test( )
// SYNTAX:- 
// test("message what function actually does" ,()=>{what you expect when it calls} )
test("It properly add two given numbers",()=>{
    expect(sum(1,2)).toBe(3)
    expect(sum(1,2)).toBe(10)       // it will fail due to inappropriate result
})
