import React, { useState } from 'react';

const BookingForm = ({ onSubmit, selectedSeatsCount }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
        if (!formData.phone.trim()) newErrors.phone = "Телефон обов'язковий";
        if (!formData.email.includes('@')) newErrors.email = "Некоректний Email";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px', marginTop: '20px' }}>
            <h3>Дані пасажира</h3>
            <div style={{ marginBottom: '10px' }}>
                <input type="text" name="name" placeholder="Ім'я" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
                {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
                {errors.phone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</span>}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
                {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
            </div>
            <button type="submit" disabled={selectedSeatsCount === 0} style={{ padding: '10px 15px', cursor: selectedSeatsCount === 0 ? 'not-allowed' : 'pointer' }}>
                Забронювати місця ({selectedSeatsCount})
            </button>
        </form>
    );
};

export default BookingForm;