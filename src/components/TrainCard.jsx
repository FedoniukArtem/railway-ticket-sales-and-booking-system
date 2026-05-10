import React from 'react';

const TrainCard = ({ train }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px' }}>
            <h3>Потяг №{train.number}</h3>
            <p><strong>Маршрут:</strong> {train.route.from} — {train.route.to}</p>
            <p><strong>Відправлення:</strong> {new Date(train.departure).toLocaleString('uk-UA')}</p>
            <p><strong>Тривалість:</strong> {train.duration}</p>
            <button>Вибрати</button>
        </div>
    );
};

export default TrainCard;