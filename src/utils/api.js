const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let hour = 17; hour <= 23; hour++) {
        if (random() < 0.5) result.push(`${hour}:00`);
        if (random() < 0.5) result.push(`${hour}:30`);
    }

    return result;
};

const submitAPI = (formData) => {
    return true;
};

export { fetchAPI, submitAPI };
