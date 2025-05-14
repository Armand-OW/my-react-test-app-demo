import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import UserInfo from "../../src/components/UserInfo";
import * as api from "../../src/utils/api";

jest.mock("../../src/utils/api", () => ({
    fetchUserData : jest.fn()
}))

describe("Component Tests For UserInfo", () => {
    const mockUser = { id: 1, name: "John Doe" }

    //render our component before each test -- arrange
    beforeEach(() => {
        //mocking the API calls value that it should return
        (api.fetchUserData as jest.Mock).mockResolvedValueOnce(mockUser)
        render(<UserInfo />);
    })

    test("UserInfo component should render correctly", () => {

          //Act - find the elements on screen
            const inputField = screen.getByPlaceholderText(/user id/);
            const button = screen.getByRole("button", { name: "Get User Info" });
          //Assert

          expect(inputField).toBeInTheDocument();
          expect(button).toBeInTheDocument();
    })

    test("UserInfo component should accept interaction & display data", async () => {
        const user = userEvent.setup();

        //Act - find the elements on screen
        const inputField = screen.getByPlaceholderText(/user id/);
        await user.click(inputField); //tell our "user" to click the input field
        // await user.type(inputField, "1"); //tell our "user" to type in the input field
        await user.keyboard("1"); //tell our "user" to type in the input field

        //find the button
        const button = screen.getByRole("button", { name: "Get User Info" });

        user.click(button); //tell our "user" to click the button
        
        //Assert
        expect(inputField).toHaveValue(1);

        await waitFor(() => {
            const username = screen.getByTestId("username");
            expect(username).toBeInTheDocument();
            expect(username).toHaveTextContent(mockUser.name);
        })
    })
})


describe("Snapshots of our UserInfo component", () => {

    test("UserInfo component snapshot", () => {
        const { asFragment } =  render(<UserInfo />);
        expect(asFragment()).toMatchSnapshot();
    })

})