import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import './NewBoxForm.css';

const NewBoxForm = ({ setBoxData }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: '',
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxData({ ...formData, id: uuid4() });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="formGroup">
                <label htmlFor="width">Width:</label>
                <input onChange={handleChange} id="width" name="width" value={formData.width} />
            </div>

            <div className="formGroup">
                <label htmlFor="height">Height:</label>
                <input onChange={handleChange} id="height" name="height" value={formData.height} />
            </div>

            <div className="formGroup">
                <label htmlFor="backgroundColor">backgroundColor:</label>
                <input
                    onChange={handleChange}
                    id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                />
            </div>

            <button className="submitBtn">Add Box</button>
        </form>
    );
};

export default NewBoxForm;
