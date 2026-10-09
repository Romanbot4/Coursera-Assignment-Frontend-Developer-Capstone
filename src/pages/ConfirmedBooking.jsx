import { Link, useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
    const { state } = useLocation();

    const details = state ? [
        { label: "Date", value: state.date },
        { label: "Time", value: state.time },
        { label: "Guests", value: state.guests },
        { label: "Occasion", value: state.occasion },
    ] : [];

    return (
        <section className="container confirmed-booking">
            <span className="confirmed-icon" aria-hidden="true">✓</span>
            <h1 className="text-5xl">Your table has been reserved!</h1>
            <p className="text-xl">You'll receive a confirmation email with all the details.</p>

            {
                details.length > 0 && (
                    <dl className="booking-summary">
                        {
                            details.map((detail, index) => {
                                return (
                                    <div key={index}>
                                        <dt className="font-bold">{detail.label}</dt>
                                        <dd>{detail.value}</dd>
                                    </div>
                                );
                            })
                        }
                    </dl>
                )
            }

            <Link to="/" className="button">Back to Home</Link>
        </section>
    );
}

export default ConfirmedBooking;
