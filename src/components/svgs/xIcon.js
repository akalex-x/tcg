function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50">
      <g filter="url(#a)">
        <mask id="b" fill="#fff">
          <path d="M12.021 37.022L36.77 12.273l.707.707-24.749 24.75-.707-.707z"></path>
        </mask>
        <path
          fill="#fff"
          d="M12.021 37.022L36.77 12.273l.707.707-24.749 24.75-.707-.707z"
        ></path>
        <path
          fill="#555"
          d="M12.728 37.729L37.477 12.98l-1.414-1.414-24.75 24.749 1.415 1.414z"
          mask="url(#b)"
        ></path>
        <mask id="c" fill="#fff">
          <path d="M12.728 12.273l24.749 24.749-.707.707L12.02 12.98l.708-.707z"></path>
        </mask>
        <path
          fill="#fff"
          d="M12.728 12.273l24.749 24.749-.707.707L12.02 12.98l.708-.707z"
        ></path>
        <path
          fill="#555"
          d="M12.02 12.98l24.75 24.75 1.414-1.414-24.749-24.75-1.414 1.415z"
          mask="url(#c)"
        ></path>
      </g>
      <defs>
        <filter
          id="a"
          width="33.456"
          height="33.456"
          x="8.021"
          y="12.273"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_454_355"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_454_355"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default XIcon;
