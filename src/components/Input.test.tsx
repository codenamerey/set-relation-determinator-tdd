import { segregateSets } from "./Input.tsx"

describe("sets segregation", () => {
    it("segregates one-digit relations", () => {
        expect(segregateSets("(1,1) (1,2)")).toEqual([["1","1"], ["1","2"]])
    })

    it("segregates two-digit relations", () => {
        expect(segregateSets("(11, 12) (13, 14)")).toEqual([["11","12"],["13","14"]])
    })

    it("segregates relations containing both one-digit and two-digit relations", () => {
        expect(segregateSets("(11, 1) (13, 2) (14, 3)")).toEqual([["11", "1"], ["13", "2"], ["14", "3"]])
    })
})

// describe("Test Transitivity", () => {
//     it("Works with single-digit set members", () => {
//         expect(isTransitive([[1,1]])).toBe(true)
//     })

//     it("Works with one single-digit and two-digit set members", () => {
//         expect(isTransitive([[1,23], [23, 2], [1,2]])).toBe(true)
//     })
// })