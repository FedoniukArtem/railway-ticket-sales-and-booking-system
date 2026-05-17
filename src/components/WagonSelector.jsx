import React from 'react';

const WagonSelector = ({ selectedWagon, onSelectWagon }) => {
    const wagons = [1, 2, 3, 4];

    return (
        <div style={{ marginBottom: '20px' }}>
            <span style={{ marginRight: '10px', fontWeight: 'bold' }}>Оберіть вагон:</span>
            {wagons.map(num => (
                <button
                    key={num}
                    onClick={() => onSelectWagon(num)}
                    style={{
                        padding: '8px 15px',
                        marginRight: '5px',
                        backgroundColor: selectedWagon === num ? '#007bff' : '#f0f0f0',
                        color: selectedWagon === num ? '#fff' : '#000',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}
                >
                    Вагон {num}
                </button>
            ))}
        </div>
    );
};

export default WagonSelector;