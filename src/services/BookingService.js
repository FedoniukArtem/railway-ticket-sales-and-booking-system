// Повертає список місць для конкретного вагона. Зберігає стан у localStorage.
export const getWagonSeats = (trainId, wagonNumber) => {
    const storageKey = `seats_train_${trainId}_wagon_${wagonNumber}`;
    const savedSeats = localStorage.getItem(storageKey);

    if (savedSeats) {
        return JSON.parse(savedSeats);
    }

    // Якщо даних немає, генеруємо 20 місць. Парні — заброньовані (red), непарні — вільні (green)[cite: 88, 90].
    const initialSeats = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        status: (i + 1) % 4 === 0 ? 'booked' : 'free'
    }));

    localStorage.setItem(storageKey, JSON.stringify(initialSeats));
    return initialSeats;
};

export const saveBookingToStorage = (trainId, wagonNumber, selectedSeatIds) => {
    const storageKey = `seats_train_${trainId}_wagon_${wagonNumber}`;
    const currentSeats = getWagonSeats(trainId, wagonNumber);

    const updatedSeats = currentSeats.map(seat => {
        if (selectedSeatIds.includes(seat.id)) {
            return { ...seat, status: 'booked' };
        }
        return seat;
    });

    localStorage.setItem(storageKey, JSON.stringify(updatedSeats));
};