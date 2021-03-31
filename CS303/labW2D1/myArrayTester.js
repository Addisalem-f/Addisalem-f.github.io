
// const assert = requid
describe("higher oder practice", function () {
    // beforeEach(function () {
    //     numArray = [1, 2, 3, 4, 5];
    // })
    it("multiply each element", function () {
        assert.deepEqual(myMap([1, 2, 3, 4, 5], multiplyAll), [1, 4, 9, 16, 25])

    })

    it("it filters odd elements", function () {

        assert.deepEqual(myFilter([1, 2, 3, 4, 5], oddValue), [1, 3, 5])
    })

    it("it sums values", function () {

        assert.deepEqual(myreduce([1, 2, 3, 4, 5], sumValue), 15)
    })

})