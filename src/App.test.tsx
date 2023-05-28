import { isTransitive } from "./App"

describe("Test Transitivity", () => {
    it("Works with single-digit set members", () => {
        expect(isTransitive([[1,1]])).toBe(true)
    })

    it("Works with one single-digit and two-digit set members", () => {
        expect(isTransitive([[1,23], [23, 2], [1,2]])).toBe(true)
    })
})