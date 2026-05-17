import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';
import { getWagonSeats, saveBookingToStorage } from '../services/BookingService';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { toast } from 'react-toastify';

const Booking = () => {
    const { trainId } = useParams();
    const navigate = useNavigate();
    const train = trains.find(t => t.id === parseInt(trainId));

    const [selectedWagon, setSelectedWagon] = useState(1);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        setSeats(getWagonSeats(trainId, selectedWagon));
        setSelectedSeats([]); // скидаємо обрані місця при зміні вагона
    }, [trainId, selectedWagon]);

    if (!train) return <h2>Потяг не знайдено</h2>;

    const handleSeatClick = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleBookingSubmit = (passengerData) => {
        saveBookingToStorage(trainId, selectedWagon, selectedSeats);
        toast.success(`Успішно заброньовано місця: ${selectedSeats.join(', ')} для ${passengerData.name}!`);

        // Перезавантажуємо стан місць, щоб вони стали червоними (заброньованими)
        setSeats(getWagonSeats(trainId, selectedWagon));
        setSelectedSeats([]);

        setTimeout(() => navigate('/'), 3000); // Повернення на головну сторінку
    };

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>Назад до списку</button>
            <h2>Бронювання квитків на потяг №{train.number} ({train.route.from} — {train.route.to})</h2>

            <WagonSelector selectedWagon={selectedWagon} onSelectWagon={setSelectedWagon} />

            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <SeatMap seats={seats} selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
                <BookingForm onSubmit={handleBookingSubmit} selectedSeatsCount={selectedSeats.length} />
            </div>
        </div>
    );
};

export default Booking;