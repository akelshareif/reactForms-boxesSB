import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const createBox = ({ width, height, backgroundColor }) => {
        setBoxes([...boxes, { width, height, backgroundColor }]);
    };

    const deleteBox = (color) => {
        setBoxes(boxes.filter((box) => box.backgroundColor !== color));
    };

    return (
        <div className="BoxList">
            <NewBoxForm setBoxData={createBox} />
            {boxes.map((box, idx) => (
                <Box
                    key={idx}
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.width}
                    handleDelete={deleteBox}
                />
            ))}
        </div>
    );
};

export default BoxList;
