import React from 'react';
import './Box.css';

const Box = ({ backgroundColor = 'blue', width = '100px', height = '100px', handleDelete }) => {
    return (
        <div className="Box">
            <div style={{ backgroundColor, width: `${width}px`, height: `${height}px` }}></div>
            <button className="deleteBtn" onClick={handleDelete}>
                X
            </button>
        </div>
    );
};

export default Box;
