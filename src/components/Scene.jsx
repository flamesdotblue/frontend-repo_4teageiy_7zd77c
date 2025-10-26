import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Scene() {
  return (
    <div className="absolute inset-0 bg-black">
      <Spline
        scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
