import React from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
    return (
        <main style={{ padding: '20px' }}>
            <h1>Розклад потягів (Укрзалізниця)</h1>
            <TrainList />
        </main>
    );
};

export default Home;