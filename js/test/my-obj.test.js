const data = require("../my-obj")
let data2 = {...data}
test("Matching the object",()=>{
    // expect(data).toBe(data2) // throws an error
    expect(data).not.toBe(data2) // run fine
    // expect(data).toEqual(data2) // run fine
})

