import React from 'react';


export default function Canvas ({ canvasRef }) {


    /*
    const draw = (ctx, frameCount) => {

        /*
        ctx.beginPath();
        ctx.moveTo(220, 280);

        ctx.lineTo(100, 280);
        
        ctx.lineTo(100, 80);

        ctx.lineTo(220, 80);

        ctx.lineTo(220, 120);

        ctx.stroke();

        ctx.beginPath();

        ctx.arc(220, 120, headRadius, 0, 2 * Math.PI); //head
        ctx.fill();

        ctx.moveTo(220, 120 + headRadius); //bottom middle of the head circle as a starting point to draw the arms
        ctx.lineTo(190, 120 + headRadius); // left arm

        ctx.moveTo(220, 120 + headRadius); //bottom middle of the head circle as a starting point to draw the arms
        ctx.lineTo(250, 120 + headRadius); // right arm

        ctx.moveTo(220, 120 + headRadius); //bottom middle of the head circle as a starting point to draw body
        ctx.lineTo(220, 170); //body

        ctx.lineTo(195, 200); //left leg

        ctx.moveTo(220, 170); //bottom of body as starting point to draw right leg

        ctx.lineTo(245, 200); //right leg

        ctx.stroke();

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!isCorrectGuess) {
            console.log("TESTTTT");
            console.log("NEW" + nextDrawFunction(ctx));
        } else {
            console.log("TEST!11111")
        }

    };
    */

    return (
        <canvas ref={canvasRef} height="300px" width="300px" />
    );    
};
