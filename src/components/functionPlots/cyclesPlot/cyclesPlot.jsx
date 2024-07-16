'use client';

import functionPlot from 'function-plot';
import React, { useEffect, useRef, useState } from 'react';

function CyclesPlot({ labelColor = 'orange', labelFontSize = '16px' }) {
  const plotRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    functionPlot({
      target: plotRef.current,
      width: getResponsiveWidth(dimensions.width),
      height: getResponsiveHeight(dimensions.height),
      yAxis: {
        label: 'Cycles amplitude',
        domain: [0, 20],
        labelColor: 'orange',
      },
      xAxis: { label: 'time', domain: [0, 30] },
      data: [
        {
          fn: 'abs(sin(1.8x) + x)',
          graphType: 'polyline',
          color: 'red',
        },
        {
          fn: 'abs(sin(5.0x) * 0.5 + x)',
          graphType: 'polyline',
          color: '#5CD6FF',
        },
        {
          fn: 'abs(sin(x) * 3)',
          graphType: 'polyline',
          color: '#DFC201',
        },
        {
          fn: 'abs(sin(0.2x) * 5)',
          graphType: 'polyline',
          color: '#327160',
        },
      ],
    });

    const axisLabels = plotRef.current.querySelectorAll(
      '.x.axis-label, .y.axis-label'
    );

    axisLabels.forEach((label) => {
      label.style.fill = labelColor;
      label.style.fontSize = labelFontSize;
    });
  }, [labelColor]);

  const getResponsiveWidth = (width) => {
    if (width < 450) return 350;
    if (width < 600) return 400;
    if (width < 960) return 600;
    return 700;
  };

  const getResponsiveHeight = (height) => {
    if (height < 600) return 400;
    if (height < 960) return 500;
    return 600;
  };

  return <div className="my-8" ref={plotRef}></div>;
}

export default CyclesPlot;
