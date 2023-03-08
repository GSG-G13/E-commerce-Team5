const purFunctions = require("../js/purFunctions.js")
describe("Testing Pur Functions", ()=>{
    test("Testing the deleting Function",()=>{
        const arr =[
            {id: 1, text: "Hi"},
            {id: 2, text: "Hello"}
        ]
        const actual = purFunctions.deleteObject(arr,1)
        const expected = [{id: 2, text: "Hello"}]
        expect(actual).toEqual(expected)
    })
    test("Testing the editting Function",()=>{
        const arr =[
            {id: 1, text: "Hi"},
            {id: 2, text: "Hello"}
        ]
        const newObj = {id: 1, text: "Hello from Team5"};
        const actual = purFunctions.editObject(arr, newObj)
        const expected = [{id: 1, text: "Hello from Team5"},{id: 2, text: "Hello"}]
        expect(actual).toEqual(expected)
    })
    
})



