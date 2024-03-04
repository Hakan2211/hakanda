'use client';
import { motion } from 'framer-motion';

function SVG1() {
  return (
    // <svg
    //   width="100%"
    //   height="100%"
    //   viewBox="0 0 32 32"
    //   style={{
    //     fillRule: 'evenodd',
    //     clipRule: 'evenodd',
    //     strokeLinecap: 'round',
    //     strokeLinejoin: 'round',
    //     strokeMiterlimit: 1.5,
    //   }}
    // >
    //   <g transform="matrix(0.646101,0,0,0.375497,6.11342,-4.1358)">
    //     <motion.path
    //       d="M-9.462,11.014C-6.412,40.744 1.88,53.294 6.15,19.637C7.995,5.097 22.354,7.351 22.825,22.052C23.421,40.615 30.886,55.642 31.779,31.897C32.435,14.484 54.988,45.198 42.36,51.358C35.742,54.586 33.188,97.404 19.502,52.603C15.865,40.697 0.997,50.363 1.434,69.074C1.474,70.757 1.291,94.229 1.426,96.235"
    //       fill="none"
    //       stroke="url(#_Linear1)"
    //       strokeWidth="0.5px"
    //     />
    //   </g>
    //   <defs>
    //     <linearGradient
    //       id="_Linear1"
    //       x1="0"
    //       y1="0"
    //       x2="1"
    //       y2="0"
    //       gradientUnits="userSpaceOnUse"
    //       gradientTransform="matrix(23.6737,0,0,14.3768,1.71289,12.245)"
    //     >
    //       <stop offset="0" stopColor="rgb(133,103,44)" stopOpacity="1" />
    //       <stop offset="0.27" stopColor="rgb(214,180,116)" stopOpacity="1" />
    //       <stop offset="0.53" stopColor="white" stopOpacity="1" />
    //       <stop offset="0.77" stopColor="rgb(214,180,116)" stopOpacity="1" />
    //       <stop offset="1" stopColor="rgb(133,103,44)" stopOpacity="1" />
    //     </linearGradient>
    //   </defs>
    // </svg>

    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      version="1.1"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
    >
      <g transform="matrix(1,0,0,1.52319,0,-0.759019)">
        <motion.path
          d="M0,0.498C0,0.498 0.524,1.05 1.477,1.898C5.801,5.747 18.953,15.706 32,7.956C47.727,-1.386 41.153,9.921 36.784,16.735C33.378,22.047 13.092,10.78 4.833,14.379C2.536,15.38 1.169,17.531 1.354,21.507"
          style={{
            fill: 'none',
            stroke: 'url(#_Linear1)',
            strokeWidth: '0.2px',
          }}
        />
      </g>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(41.9425,0,0,21.0085,0,11.0026)"
        >
          <stop
            offset="0"
            style={{ stopColor: 'rgb(133,103,44)', stopOpacity: 1 }}
          />
          <stop
            offset="0.27"
            style={{ stopColor: 'rgb(214,180,116)', stopOpacity: 1 }}
          />
          <stop offset="0.53" style={{ stopColor: 'white', stopOpacity: 1 }} />
          <stop
            offset="0.77"
            style={{ stopColor: 'rgb(214,180,116)', stopOpacity: 1 }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(133,103,44)', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SVG1;
