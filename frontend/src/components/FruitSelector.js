import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FruitSelector = () => {
    const [fruits, setFruits] = useState({});
    const [selectedFruit, setSelectedFruit] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        axios.get('/api/fruits')
            .then(response => setFruits(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleCalculate = () => {
        axios.post('/api/calculate', { fruit: selectedFruit, quantity })
            .then(response => setTotalPrice(response.data.totalPrice))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Select Fruit</h1>
            <select onChange={e => setSelectedFruit(e.target.value)}>
                <option value="">Select...</option>
                {Object.keys(fruits).map(fruit => (
                    <option key={fruit} value={fruit}>
                        {fruit} - ${fruits[fruit]}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />
            <button onClick={handleCalculate}>Calculate Total Price</button>
            {totalPrice !== null && (
                <div>Total Price: ${totalPrice.toFixed(2)}</div>
            )}
        </div>
    );
};

export default FruitSelector;
