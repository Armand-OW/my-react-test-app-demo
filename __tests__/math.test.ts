import { addNumbers, multiplyNumbers, subtractNumbers } from "../src/utils/math"

//describe (tag to group tests together)
describe("Math functions", () => {

    //declare a test
    test("adding two numbers", () => {

        //Arrange
        const a = 5
        const b = 7
        //Act
        const result = addNumbers(a, b)
        //Assert
        expect(result).toBe(12)
        expect(result).toBeDefined()
    })

    test("subtract two numbers", () => {
        //Arrange
        const a = 12
        const b = 5

        //Act
        const result = subtractNumbers(a, b)

        //Assert
        expect(result).toBe(7)
        expect(result).toBeDefined()
        expect(result).not.toBe(8)
    })
})

//multiply 3 numbers
describe("own test for multiply", () => {

    test("multiply three numbers", () => {
        //Arrange
        const one = 2
        const two = 3
        const three = 4

        //Act
        const result = multiplyNumbers(one, two, three)

        //Assert
        expect(result).toBe(24)
        expect(result).toBeDefined()
    })
})