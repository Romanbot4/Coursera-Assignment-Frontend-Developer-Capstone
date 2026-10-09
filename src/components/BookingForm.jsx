import { useState } from 'react';
import FormField from './FormField';
import './BookingForm.css';

const occasions = ["Birthday", "Anniversary", "Engagement"];

const minGuests = 1;
const maxGuests = 10;

const getToday = () => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split("T")[0];
}

const validate = ({ date, time, guests, occasion }, today) => {
    const errors = {};

    if (!date || date < today) {
        errors.date = "Please choose today or a future date.";
    }

    if (!time) {
        errors.time = "Please choose a time.";
    }

    if (guests === "" || Number(guests) < minGuests || Number(guests) > maxGuests) {
        errors.guests = `Please enter a number between ${minGuests} and ${maxGuests}.`;
    }

    if (!occasion) {
        errors.occasion = "Please choose an occasion.";
    }

    return errors;
}

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const today = getToday();

    const [date, setDate] = useState(today);
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(minGuests);
    const [occasion, setOccasion] = useState(occasions[0]);
    const [touched, setTouched] = useState({});

    const selectedTime = availableTimes.includes(time) ? time : availableTimes[0] || "";

    const errors = validate({ date, time: selectedTime, guests, occasion }, today);
    const isValid = Object.keys(errors).length === 0;

    const getError = (field) => {
        return touched[field] ? errors[field] : undefined;
    }

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setTouched({ ...touched, date: true });
        dispatch(e.target.value);
    }

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
        setTouched({ ...touched, guests: true });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValid) {
            setTouched({ date: true, time: true, guests: true, occasion: true });
            return;
        }

        submitForm({ date, time: selectedTime, guests: Number(guests), occasion });
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <FormField label="Choose date" htmlFor="res-date" error={getError("date")}>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    min={today}
                    value={date}
                    required
                    aria-invalid={!!getError("date")}
                    aria-describedby={getError("date") ? "res-date-error" : undefined}
                    onChange={handleDateChange}
                    onBlur={handleBlur}
                />
            </FormField>

            <FormField label="Choose time" htmlFor="res-time" error={getError("time")}>
                <select
                    id="res-time"
                    name="time"
                    value={selectedTime}
                    required
                    aria-invalid={!!getError("time")}
                    aria-describedby={getError("time") ? "res-time-error" : undefined}
                    onChange={(e) => setTime(e.target.value)}
                    onBlur={handleBlur}
                >
                    {
                        availableTimes.map((availableTime, index) => {
                            return <option key={index} value={availableTime} data-testid="res-time-option">{availableTime}</option>
                        })
                    }
                </select>
            </FormField>

            <FormField label="Number of guests" htmlFor="guests" error={getError("guests")}>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    placeholder="1"
                    min={minGuests}
                    max={maxGuests}
                    value={guests}
                    required
                    aria-invalid={!!getError("guests")}
                    aria-describedby={getError("guests") ? "guests-error" : undefined}
                    onChange={handleGuestsChange}
                    onBlur={handleBlur}
                />
            </FormField>

            <FormField label="Occasion" htmlFor="occasion" error={getError("occasion")}>
                <select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    required
                    aria-invalid={!!getError("occasion")}
                    aria-describedby={getError("occasion") ? "occasion-error" : undefined}
                    onChange={(e) => setOccasion(e.target.value)}
                    onBlur={handleBlur}
                >
                    {
                        occasions.map((occasion, index) => {
                            return <option key={index} value={occasion}>{occasion}</option>
                        })
                    }
                </select>
            </FormField>

            <button type="submit" disabled={!isValid} aria-label="On Click">Make Your Reservation</button>
        </form>
    );
}

export default BookingForm;
