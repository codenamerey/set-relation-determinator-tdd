import { isAntisymmetrical, isReflexive, isSymmetrical, isTransitive } from "./App"

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

describe("Test reflexivity", () => {
    it("Works with sets with one cardinality", () => {
        expect(isReflexive([[1,1]])).toBe(true)
    })

    it("Works with two set members", () => {
        expect(isReflexive([[1, 1], [2, 2]])).toBe(true)
    })

    it("Works with more than two set members", () => {
        expect(isReflexive([[11,11], [12, 12], [13, 13]])).toBe(true)
    })

    it("Fails with non-reflexive sets", () => {
        expect(isReflexive([[11,11], [12, 12], [13, 13], [14, 13]])).toBe(false)
    })    
})

describe("Test antisymmetry", () => {
    it("Works with sets with one cardinality", () => {
        expect(isAntisymmetrical([[1,1]])).toBe(true)
    })

    it("Works with two set members", () => {
        expect(isAntisymmetrical([[1,2], [2,1]])).toBe(false)
    })

    it("Works with more than two set members", () => {
        expect(isAntisymmetrical([[11,11], [12, 13], [13, 12]])).toBe(false)
    })

    it("Fails with non-reflexive sets", () => {
        expect(isAntisymmetrical([[11,11], [12, 12], [13, 13], [14, 13]])).toBe(true)
    })    
})