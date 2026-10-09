import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";

const testimonial = {
    fullName: "Marcus",
    description: "Local Guide",
    image: "marcus.jpg",
    rating: [1, 1, 1, 1, 0.5],
    says: "Great atmosphere and fantastic service.",
};

describe("TestimonialCard", () => {
    test("announces the star rating to screen readers", () => {
        render(<TestimonialCard testimonial={testimonial} />);

        expect(screen.getByRole("img", { name: "Rated 4.5 out of 5" })).toBeInTheDocument();
    });

    test("describes the customer's profile picture", () => {
        render(<TestimonialCard testimonial={testimonial} />);

        expect(screen.getByAltText("Marcus's profile picture.")).toBeInTheDocument();
    });
});
