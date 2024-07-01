'use client';

import functionPlot from 'function-plot';
import React, { useEffect, useRef, useState } from 'react';

function FloatVolatilityCorrelation({
  labelColor = 'orange',
  labelFontSize = '16px',
}) {
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
        label: 'Stock Price Volatility (%)',
        domain: [0, 50],
        labelColor: 'orange',
      },
      xAxis: { label: 'Float Size (M)', domain: [0, 100] },
      data: [
        {
          points: generateData(),
          fnType: 'points',
          graphType: 'scatter',
        },
        {
          fn: '250 / (x + 1)', // Example inverse function
          graphType: 'polyline',
          color: 'red',
        },
      ],
    });
    // const xAxisLabels = plotRef.current.querySelectorAll('.x.axis text');
    // const yAxisLabels = plotRef.current.querySelectorAll('.y.axis text');
    const axisLabels = plotRef.current.querySelectorAll(
      '.x.axis-label, .y.axis-label'
    );

    // xAxisLabels.forEach((label) => {
    //   label.style.fill = labelColor;
    // });

    // yAxisLabels.forEach((label) => {
    //   label.style.fill = labelColor;
    // });

    axisLabels.forEach((label) => {
      label.style.fill = labelColor;
      label.style.fontSize = labelFontSize;
    });
  }, [labelColor]);

  const generateData = () => {
    const data = [];
    for (let i = 1; i <= 100; i += 1) {
      data.push([i, 1000 / (i + 10)]);
    }
    return data;
  };

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

export default FloatVolatilityCorrelation;
