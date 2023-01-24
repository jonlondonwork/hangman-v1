import React from 'react';
export default function Canvas ({ canvasRef }) {

    return (
        <div className="center">
            <canvas ref={canvasRef} height="300px" width="300px" />
        </div>
    );    
};
