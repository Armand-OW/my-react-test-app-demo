import {fetchUserData} from "../src/utils/api";

describe("Test API functionality", () => {

    //setup - run before any test
    beforeAll(() => {
        //for all tests, we are going to use the same mock function
        global.fetch = jest.fn(); //setting up our mock function
    })

    //teardown - run after each test
    afterEach(() => {
        //after each test, we are going to clear the mock function
        jest.resetAllMocks();
    })


    test("fetchUserData should return valid data based on ID", async () => {

        //arrange
        const userId = 1;
        const expectedUser = {id: 1, name: 'Leanne Graham' };

        //act
        //overriding the fetch function with a mock implementation
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => expectedUser
        }); 

        const result = await fetchUserData(userId);

        //assert

        expect(result).toEqual(expectedUser);
        expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`);

    })

    test("fetchUserData should throw an error on network failure", async () => {

        //arrange
        (fetch as jest.Mock).mockResolvedValueOnce({ ok: false, } );

        //act
        const result = fetchUserData(0); //error

        //assert
        expect(result).rejects.toThrow('Network response was not ok');
        expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/0`);
       
    })
})