import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";
import "./Booking.css";

export const initializeTimes = () => {
    return fetchAPI(new Date());
}

export const updateTimes = (availableTimes, date) => {
    const times = fetchAPI(new Date(date));
    return times.length > 0 ? times : availableTimes;
}

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed", { state: formData });
        }
    }

    return (
        <>
            <div className="bg-primary">
                <section className="container booking-heading">
                    <h1 className="text-5xl text-secondary">Reserve a Table</h1>
                    <p className="text-xl font-medium">Book your table at Little Lemon, Chicago. We look forward to serving you.</p>
                </section>
            </div>

            <section className="container booking">
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />
            </section>
        </>
    );
}


export default Booking;
