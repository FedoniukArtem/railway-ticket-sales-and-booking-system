import React, { useState } from 'react';
import { trains } from '../data/trains';
import TrainCard from './TrainCard';

const TrainList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTrains = trains.filter(train =>
        train.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        train.route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        train.route.to.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Пошук за номером або містом..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredTrains.map(train => (
                    <TrainCard key={train.id} train={train} />
                ))}
            </div>
        </div>
    );
};

export default TrainList;