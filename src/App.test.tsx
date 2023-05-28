import { isSymmetrical, isTransitive } from "./App"

describe("Test Transitivity", () => {
    it("Works with single-digit set members", () => {
        expect(isTransitive([[1,1]])).toBe(true)
    })

    it("Works with one single-digit and two-digit set members", () => {
        expect(isTransitive([[1,23], [23, 2], [1,2]])).toBe(true)
    })
});

describe("Test symmetry", () => {
    it("Works with sets with one cardinality", () => {
        expect(isSymmetrical([[1,1]])).toBe(true)
    })

    it("Works with two set members", () => {
        expect(isSymmetrical([[1, 2], [2, 1]])).toBe(true)
    })

    it("Works with more than two set members", () => {
        expect(isSymmetrical([[11,12], [12, 11], [13, 14], [14, 13]])).toBe(true)
    })

    it("Fails with non-symmetrical sets", () => {
        expect(isSymmetrical([[1,2],[2,3]])).toBe(false)
    })
})