import { initializeTimes, updateTimes } from "./Booking";
import { fetchAPI } from "../utils/api";

const timeFormat = /^([01]?\d|2[0-3]):[0-5]\d$/;

describe("Booking reducer", () => {
    test("initializeTimes returns available times for today", () => {
        const times = initializeTimes();

        expect(times).toEqual(fetchAPI(new Date()));
        times.forEach((time) => expect(time).toMatch(timeFormat));
    });

    test("updateTimes returns available times for the selected date", () => {
        const date = "2099-01-15";

        expect(updateTimes([], date)).toEqual(fetchAPI(new Date(date)));
    });

    test("updateTimes returns times in HH:MM format", () => {
        updateTimes([], "2099-03-08").forEach((time) => expect(time).toMatch(timeFormat));
    });
});
