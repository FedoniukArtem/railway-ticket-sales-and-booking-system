import React from 'react';

const SeatMap = ({ seats, selectedSeats, onSeatClick }) => {
    const getSeatColor = (seat) => {
        if (seat.status === 'booked') return '#dc3545'; // червоний [cite: 90]
        if (selectedSeats.includes(seat.id)) return '#0056b3'; // синій (обраний) [cite: 89]
        return '#28a745'; // зелений (вільний) [cite: 88]
    };

    return (
        <div>
            <h3>Схема місць вагону</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 50px)', gap: '10px', margin: '20px 0' }}>
                {seats.map(seat => (
                    <button
                        key={seat.id}
                        disabled={seat.status === 'booked'}
                        onClick={() => onSeatClick(seat.id)}
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: getSeatColor(seat),
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: seat.status === 'booked' ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        {seat.id}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SeatMap;