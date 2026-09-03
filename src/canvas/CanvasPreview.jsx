import React, { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Rect, Circle } from 'react-konva';




function CanvasPreview() {


    const containerRef = useRef(null);
    const stageRef = useRef(null);
    const [stageWidth, setStageWidth] = useState(400);
    const [scale, setScale] = useState(1);
const rectRef = useRef(null);
     
useEffect(() => {
      const handleResize = () => {
        if (containerRef.current) {
        //    setStageWidth(containerRef.current.offsetWidth);
           
          console.log(containerRef.current.offsetWidth)
          const containerWidth = containerRef.current.offsetWidth;
          setScale(containerWidth / stageWidth);
          // setStageHeight(containerRef.current.offsetHeight);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [stageWidth]);

    function createDragBoundFunc(pos){
       const stage = stageRef.current;
            if (!stage) return pos;
            const node = rectRef.current;
             const width = node.width() ;
            const height = node.height() ;

      console.log(pos);
      
 return {
              x: Math.max(0, Math.min(pos.x, stage.width() - width)),
              y: Math.max(0, Math.min(pos.y, stage.height() - height)),
            };   
//  {
//             x: Math.max(xMin, Math.min(e.x, xMax - 100)), // subtract width to stay inside
//             y: Math.max(yMin, Math.min(e.y, yMax - 100)), // subtract height to stay inside
//           }
      
}
   return (
    <>
    <div><input type="number" placeholder='123' onChange={(e)=>setStageWidth(Number(e.target.value))} /></div>
    <div ref={containerRef} className="!relative bg-amber-100 overflow-hidden">
    <Stage scaleX={scale} scaleY={scale}
     ref={stageRef} width={400} height={300} style={{ border: '2px solid black',backgroundColor:'green' }} >
      <Layer>
        {/* A simple draggable rectangle */}
        {/* <Rect
                width={200 }
                height={300}
                stroke={'black'}
                // scaleX={2}
                // scaleY={2}
              /> */}

        <Rect
          x={20} y={20} width={50} height={50}
          draggable
          ref={rectRef}
          dragBoundFunc={(pos)=>createDragBoundFunc(pos)}
          fill="red" shadowBlur={10}
        />
        {/* A circle with a click event */}
        <Circle
          x={100} y={100} radius={50}
          fill="gray"
          draggable
          // onClick={() => alert('Circle clicked!')}
        />
        
              
        
      </Layer>
    </Stage>
    </div>
    </>
  );
}
export default CanvasPreview;

