import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const createBox = ({ width, height, backgroundColor, id }) => {
        setBoxes([...boxes, { width, height, backgroundColor, id }]);
    };

    const deleteBox = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    };

    return (
        <div className="BoxList">
            <NewBoxForm setBoxData={createBox} />
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.width}
                    handleDelete={() => deleteBox(box.id)}
                />
            ))}
        </div>
    );
};

export default BoxList;
