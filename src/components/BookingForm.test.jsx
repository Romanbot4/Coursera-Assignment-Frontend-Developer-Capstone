import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:30", "20:00"];

const renderForm = () => {
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );

    return { dispatch, submitForm };
}

describe("BookingForm", () => {
    test("renders all form labels", () => {
        renderForm();

        expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
        expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
        expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    });

    test("applies HTML5 validation attributes", () => {
        renderForm();

        const dateInput = screen.getByLabelText("Choose date");
        expect(dateInput).toHaveAttribute("type", "date");
        expect(dateInput).toHaveAttribute("min");
        expect(dateInput).toBeRequired();

        const guestsInput = screen.getByLabelText("Number of guests");
        expect(guestsInput).toHaveAttribute("type", "number");
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
        expect(guestsInput).toBeRequired();

        expect(screen.getByLabelText("Choose time")).toBeRequired();
        expect(screen.getByLabelText("Occasion")).toBeRequired();
    });

    test("renders an option for each available time", () => {
        renderForm();

        expect(screen.getAllByTestId("res-time-option")).toHaveLength(availableTimes.length);
    });

    test("dispatches the new date when the date changes", () => {
        const { dispatch } = renderForm();

        fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2099-01-15" } });

        expect(dispatch).toHaveBeenCalledWith("2099-01-15");
    });

    test("submits the form with valid default values", () => {
        const { submitForm } = renderForm();

        fireEvent.click(screen.getByRole("button", { name: "On Click" }));

        expect(submitForm).toHaveBeenCalledWith(expect.objectContaining({
            time: "17:00",
            guests: 1,
            occasion: "Birthday",
        }));
    });

    test("shows an error and disables submit when the date is empty", () => {
        const { submitForm } = renderForm();

        fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "" } });

        expect(screen.getByRole("alert")).toHaveTextContent("Please choose today or a future date.");
        expect(screen.getByRole("button", { name: "On Click" })).toBeDisabled();
        expect(submitForm).not.toHaveBeenCalled();
    });

    test("shows an error and disables submit when guests are out of range", () => {
        renderForm();

        fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "11" } });

        expect(screen.getByRole("alert")).toHaveTextContent("Please enter a number between 1 and 10.");
        expect(screen.getByRole("button", { name: "On Click" })).toBeDisabled();
    });
});
