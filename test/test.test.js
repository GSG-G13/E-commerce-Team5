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
})