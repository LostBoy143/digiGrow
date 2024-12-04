import React from "react";
import { useNavigate } from "react-router-dom";

const SearchArbitrage = () => {
  const [leftbtnWidth, setLeftBtnWidth] = React.useState("w-[534px]");
  const [rightbtnWidth, setRightBtnWidth] = React.useState("xl:w-40 w-28");
  const [showText, setShowText] = React.useState(true);
  const navigate = useNavigate()

  /* Card states */
  const [isMobile, setIsMobile] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState("card1");

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1280px)").matches);
    };

    // Check on mount
    checkIfMobile();
    if (isMobile) setActiveCard("all");
    else setActiveCard("card1");
    // Add event listener for viewport changes
    const mediaQuery = window.matchMedia("(max-width: 1280px)");
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup on unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [isMobile]);

  const handleCardClick = (card) => {
    if (isMobile) {
      // In mobile view, consider all cards as active
      setActiveCard("all");
    } else {
      // For desktop, set the clicked card
      setActiveCard(card);
    }
  };
  const handleHover = () => {
    setLeftBtnWidth("xl:w-40 w-28");
    setRightBtnWidth("w-[534px]");
    setShowText(false);
  };
  const handleHoverLeave = () => {
    setLeftBtnWidth("w-[534px]");
    setRightBtnWidth("xl:w-40 w-28");
    setTimeout(() => setShowText(true), 200);
  };

  return (
    <div className="w-full mt-[10%] xl:mt-[5%]">
      <div className=" w-full flex mx-auto flex-col md:px-20 xl:flex-row px-2 lg:px-10 py-5 gap-10 md:py-10 justify-center items-center xl:items-start relative bg-[url('/assets/BGELEMENTS.png')] bg-cover bg-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 544 551"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-32 right-0 -scale-y-100"
        >
          <g clipPath="url(#clip0_392_2356)">
            <path
              d="M485.151 284.062L484.827 283.833L257.651 127.535L257.422 127.878L99.2169 359.442L99.541 359.671L326.698 515.969L326.926 515.626L485.132 284.062H485.151ZM257.861 128.66L484.017 284.262L326.488 514.825L100.342 359.232L257.861 128.66Z"
              fill="#232233"
            />
            <path
              d="M487.783 292.07L263.181 127.88L262.943 128.194L96.5874 351.418L321.18 515.618L321.418 515.303L487.774 292.08L487.783 292.07ZM263.353 129.004L486.649 292.251L321.028 514.493L97.7312 351.246L263.353 129.004Z"
              fill="#232233"
            />
            <path
              d="M487.192 297.597L486.878 297.34L271.312 125.448L271.064 125.772L97.1785 345.907L97.493 346.164L313.059 518.056L313.307 517.732L487.183 297.588L487.192 297.597ZM271.436 126.582L486.058 297.721L312.926 516.912L98.3128 345.783L271.445 126.592L271.436 126.582Z"
              fill="#232233"
            />
            <path
              d="M489.25 305.776L488.936 305.518L276.782 126.173L276.515 126.478L95.1086 337.719L95.4231 337.977L307.577 517.322L307.844 517.017L489.26 305.766L489.25 305.776ZM276.887 127.307L488.116 305.862L307.491 516.188L96.2619 337.633L276.887 127.307Z"
              fill="#232233"
            />
            <path
              d="M488.289 311.238L285.066 124.314L96.0918 332.258L299.315 519.181L488.289 311.238ZM285.105 125.458L487.136 311.286L299.248 518.028L97.2261 332.21L285.114 125.468L285.105 125.458Z"
              fill="#232233"
            />
            <path
              d="M489.766 319.559L290.47 125.411L290.184 125.697L94.5945 323.937L293.881 518.076L294.167 517.79L489.757 319.55L489.766 319.559ZM290.489 126.555L488.622 319.559L293.881 516.932L95.7478 323.927L290.489 126.555Z"
              fill="#232233"
            />
            <path
              d="M298.849 124.143L95.9384 318.55L96.2243 318.836L285.512 519.352L488.413 324.935L488.127 324.649L298.839 124.133L298.849 124.143ZM97.0917 318.579L298.83 125.286L487.288 324.916L285.55 518.208L97.0917 318.579Z"
              fill="#232233"
            />
            <path
              d="M304.176 125.621L303.871 125.888L95.0414 310.144L280.192 517.866L280.497 517.599L489.327 333.342L304.176 125.621ZM96.1852 310.22L304.1 126.765L488.174 333.295L280.259 516.75L96.1852 310.22Z"
              fill="#232233"
            />
            <path
              d="M312.612 124.926L96.7573 304.864L97.0146 305.179L271.747 518.572L487.602 338.633L487.345 338.319L312.612 124.926ZM97.8916 304.969L312.498 126.07L486.468 338.528L271.862 517.428L97.8916 304.969Z"
              fill="#232233"
            />
            <path
              d="M317.817 126.774L317.493 127.022L96.4521 296.398L266.552 516.711L266.876 516.464L487.926 347.077L317.826 126.764L317.817 126.774ZM97.5864 296.561L317.664 127.918L486.773 346.953L266.695 515.596L97.5864 296.561Z"
              fill="#232233"
            />
            <path
              d="M326.281 126.679L325.947 126.917L98.5297 291.252L98.7584 291.576L258.088 516.826L258.421 516.588L485.839 352.254L485.61 351.929L326.29 126.689L326.281 126.679ZM99.6544 291.442L326.09 127.823L484.704 352.072L258.278 515.682L99.6544 291.442Z"
              fill="#232233"
            />
            <path
              d="M331.332 128.891L330.999 129.11L98.8152 282.788L253.026 514.605L253.36 514.386L485.543 360.708L331.323 128.881L331.332 128.891ZM99.9399 283.016L331.113 130.006L484.437 360.48L253.255 513.48L99.9399 283.016Z"
              fill="#232233"
            />
            <path
              d="M339.787 129.376L101.246 277.783L244.59 514.118L483.131 365.712L339.787 129.376ZM102.351 278.05L339.511 130.492L482.007 365.445L244.857 512.994L102.351 278.05Z"
              fill="#232233"
            />
            <path
              d="M344.669 131.931L102.115 269.347L239.702 511.554L482.256 374.138L344.669 131.931ZM103.22 269.652L344.364 133.037L481.151 373.833L239.997 510.458L103.22 269.652Z"
              fill="#232233"
            />
            <path
              d="M353.057 133.019L352.695 133.209L104.889 264.534L105.07 264.887L231.314 510.487L231.676 510.297L479.483 378.972L353.057 133.019ZM105.985 264.868L352.714 134.105L478.397 378.609L231.657 509.382L105.985 264.868Z"
              fill="#232233"
            />
            <path
              d="M357.756 135.907L106.346 256.175L106.517 256.537L226.614 507.58L478.014 387.321L477.843 386.959L357.746 135.916L357.756 135.907ZM107.432 256.556L357.374 136.993L476.947 386.94L227.005 506.503L107.432 256.556Z"
              fill="#232233"
            />
          </g>
          <circle
            cx="145.12"
            cy="145.12"
            r="145.12"
            transform="matrix(1 0 0 -1 51.5254 364.069)"
            fill="url(#paint0_linear_392_2356)"
          />
          <path
            d="M1 1.00024L532.707 593.708"
            stroke="#232233"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_392_2356"
              x1="305.961"
              y1="97.956"
              x2="40.5126"
              y2="260.611"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8CC540" />
              <stop offset="1" stopColor="#FBE100" />
            </linearGradient>
            <clipPath id="clip0_392_2356">
              <rect
                width="355.544"
                height="355.544"
                fill="white"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 40.7773 321.743)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="max-w-[600px] relative md:space-x-6 text-center xl:text-left space-x-3 md:tracking-wide tracking-normal">
          <h1 className="xl:text-9xl font-thunder md:tracking-wide tracking-normal font-medium md:text-7xl text-6xl text-[#8cc540] md:m-2 m-1 md:p-2 p-1">
            SEARCH ARBITRAGE
          </h1>
          <p className="font-poppins text-lg font-normal text-[#232233]">
            Maximize profit by driving traffic from low-cost ads to
            higher-paying search results, bridging the gap between ad costs and
            revenue.
          </p>
        </div>
        <div className="relative ">
          <div className="rounded-[10px] overflow-hidden w-full max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px] lg:max-h-[400px] h-auto aspect-w-16 aspect-h-9">
            <img
              src="/assets/Social Media Posts Mockups 1.png"
              alt="tour"
              className="transition-transform duration-500 ease-in-out hover:scale-125 w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-1 rounded-[10px] py-1  max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px] xl:h-40 lg:h-32 md:h-28 h-24 ">
            <button
              className={`${leftbtnWidth} bg-[#8cc540] overflow-hidden rounded-[10px]  text-white font-bold py-1  duration-300 ease-in-out`}
            >
              {showText ? (
                <div className="pl-6 md:pt-6 p-2 w-full flex justify-between ">
                  <span
                    className={` font-porter text-[#232233] xl:text-3xl md:text-xl text-sm  duration-700 ease-in-out text-left`}
                  >
                    STATE OF <br /> THE ART <br /> TECHNOLOGY
                  </span>
                  <svg
                    width="212"
                    height="132"
                    viewBox="0 0 145 159"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M171.189 205.518L187.604 193.895L201.303 179.073L203.158 176.36L215.635 155.27L222.723 133.086V132.999L224.005 111.213L222.356 96.0162V95.943L222.338 95.8469L217.205 73.4845L217.146 73.3884L205.928 54.7919L196.171 38.7533L196.079 38.6069L196.061 38.5932L186.468 30.6311L178.826 24.2843L163.968 13.5355L163.63 13.2564L163.524 13.2152L163.355 13.1511L142.709 5.21653C142.709 5.21653 142.682 5.21653 142.668 5.20738L142.604 5.1845L125.727 1.55123L104.386 0L81.9728 4.20068C81.9728 4.20068 81.9545 4.20983 81.9407 4.21441L81.8812 4.22814L71.6844 7.63719L71.6386 7.65549H71.6249L53.4382 15.6313L36.7625 27.5561L22.683 42.6474L12.1244 59.9352L5.83329 78.1336L2.11079 89.6008C2.065 89.6832 2.02837 89.7747 2.01921 89.8799L0 111.922L0.0183149 112.018L3.82781 132.353L3.84612 132.463L3.85528 132.477L7.81587 149.664C7.81587 149.774 7.83418 149.888 7.88913 149.994L18.411 169.354L18.4477 169.391L29.8349 184.574L46.474 199.711L46.5427 199.738L62.6872 209.151L83.1999 218.014L106.831 220.517H106.835L106.922 220.527L121.368 221.995L143.868 218.316L165.96 209.004L171.175 205.513L171.189 205.518ZM177.613 26.6867L160.118 21.7813L159.939 21.4839L146.546 10.3187L160.69 13.6225L162.915 14.4782L177.613 26.6821V26.6867ZM104.468 1.4048L122.027 2.68148L108.328 5.65124L107.783 5.44075L93.1769 4.36999L101.162 2.02713L104.468 1.40938V1.4048ZM88.6394 5.87089L77.7146 15.8281L77.4215 15.8052L65.4344 18.0519L71.7439 9.12435L72.1102 8.9642L88.6348 5.87089H88.6394ZM23.8505 43.4208L28.7269 43.947L21.5566 55.7025L21.5017 55.8672L14.2352 59.1253L23.8368 43.4345L23.8505 43.4208ZM6.32779 137.007L13.3973 149.989L13.8003 150.355L17.5548 164.852L13.7453 157.841L9.16201 149.408L6.32321 137.007H6.32779ZM23.9055 174.342L34.6563 184.107L35.2424 184.359L43.1498 194.792L41.0802 192.906L30.8285 183.581L23.9101 174.342H23.9055ZM165.081 207.888L157.815 205.367L179.596 189.941L184.98 194.06L170.402 204.369L165.255 207.815L165.081 207.888ZM195.008 39.5312L205.25 56.5124L191.954 46.5964L191.867 46.2166L181.825 29.5192L190.882 36.113L191.908 36.9642L195.003 39.5358L195.008 39.5312ZM144.074 10.0761L157.92 21.6166L135.933 21.9918L135.873 21.8911L135.782 21.8133L124.413 12.2726L143.648 9.90683L144.069 10.067L144.074 10.0761ZM7.31221 78.1198L16.9458 70.0205L15.8927 81.7577L15.9385 81.9865L5.69592 94.7761L7.17943 78.5042L7.31221 78.1198ZM5.17853 131.987L5.04117 131.26L8.05854 114.654L15.2059 127.7L15.3616 127.842L13.7453 147.729L5.17395 131.992L5.17853 131.987ZM19.5282 168.476L18.9376 167.387L14.7435 151.206L28.0675 163.255L28.3056 163.355L34.1114 181.723L19.5282 168.48V168.476ZM45.9703 197.359L36.5382 184.912L55.6085 193.071L55.7962 193.089L66.5883 206.867L47.2478 198.516L45.9703 197.354V197.359ZM106.895 219.122L106.359 219.067L94.0377 211.329L118.983 207.211L119.01 207.202L130.608 215.255L106.899 219.122H106.895ZM168.863 39.1697L173.185 58.6356L147.851 52.7236L144.372 36.6988L168.863 39.1697ZM122.742 12.6981L134.175 22.2938L109.908 28.5353L101.776 21.6486L122.646 12.6661L122.737 12.7027L122.742 12.6981ZM107.577 6.82267L121.725 12.3L101.194 21.1453L101.13 21.0903L90.9745 17.1505L107.325 6.79979L107.577 6.8181V6.82267ZM131.597 215.095L119.77 206.881L144.765 196.311L155.686 204.987L131.734 215.077L131.601 215.1L131.597 215.095ZM195.594 69.0641L194.087 92.9549L173.245 81.4465L174.678 59.8483L195.594 69.0641ZM173.309 59.3724L171.885 80.8288L146.601 71.0775L147.847 53.4328L173.309 59.3724ZM77.4994 17.21L88.8317 18.0657L73.5342 34.8318L73.4564 34.7998L67.7192 34.3513L77.4627 17.2191L77.5039 17.21H77.4994ZM64.5874 19.6123L76.5607 17.3839L66.9454 34.2918H66.9134L60.6955 35.4541L64.5782 19.6215H64.592L64.5874 19.6123ZM18.4477 69.0046L35.0821 62.9278L34.5556 68.9863V69.0046L17.3854 80.7693L18.4385 69.0275L18.4477 68.9955V69.0046ZM92.4901 210.139L80.4114 195.377L104.99 191.268L117.783 206.012L92.6046 210.148L92.4901 210.135V210.139ZM146.459 53.2223L145.232 70.6565L117.435 63.509L118.36 51.1449L146.459 53.2269V53.2223ZM52.9941 38.6206L47.1379 42.8167L40.3705 33.3766L51.2816 25.5885L52.9941 38.6252V38.6206ZM116.963 51.1449L116.057 63.239L87.9251 59.29L88.415 53.1446L116.963 51.1449ZM60.4711 36.8955L66.3319 35.8156L59.972 56.5353L60.4711 36.8955ZM98.4928 135.282L115.027 123.522L134.028 144.173L113.909 158.445L98.4882 135.287L98.4928 135.282ZM85.8922 47.356L86.9819 52.6504L62.6689 58.027L85.8922 47.356ZM62.559 57.3086L83.1129 42.2722L85.6586 46.6925L62.5544 57.3086H62.559ZM86.9956 53.3642L86.5332 59.1847L62.527 58.7775L86.9956 53.3688V53.3642ZM83.2411 109.195L94.8252 100.94L114.088 122.492L97.7465 134.097L83.2365 109.195H83.2411ZM63.2321 86.3427L69.5095 83.6109L81.9682 108.303L69.6514 113.601L63.2321 86.3382V86.3427ZM70.1276 83.286L75.9151 79.1494L93.9095 99.892L82.5726 107.955L70.1276 83.286ZM60.7733 61.0654L75.0177 78.0924L69.537 81.9956L60.7733 61.0654ZM62.9894 84.9242L60.1964 61.5047L68.928 82.3571L62.9848 84.9242H62.9894ZM62.3163 85.1622L56.3365 86.2329L59.5416 61.88L62.3163 85.1667V85.1622ZM61.2815 60.5896L80.1596 72.6699L75.5397 77.6302L61.2815 60.5896ZM50.0271 85.8119L58.8045 62.0996L55.6223 86.2924L50.0225 85.8074L50.0271 85.8119ZM61.7623 60.0679L84.024 66.4604L80.5946 72.1208L61.7623 60.0679ZM103.978 89.1752L94.4315 99.4344L76.4463 78.701L81.3226 73.4433L103.974 89.1707L103.978 89.1752ZM43.8916 83.3272L40.105 80.0005L57.408 61.8342L43.8916 83.3272ZM58.0627 62.1042L49.3357 85.6747L44.4822 83.6933L58.0627 62.1042ZM62.1927 59.4639L86.35 59.8757L84.3446 65.8244L62.1927 59.4639ZM111.483 76.8981L104.404 88.6215L81.753 72.8942L85.3656 66.8997L111.478 76.8981H111.483ZM68.983 113.816L56.5655 115.995L56.2404 87.6652L62.5544 86.5212L68.983 113.816ZM55.8695 116.027L44.2212 114.965L49.6287 87.1756L55.5444 87.6881L55.8695 116.027ZM39.6883 79.4331L37.2067 74.9991L56.9455 61.308L39.6883 79.4331ZM115.906 63.9208L111.785 76.2666L85.6678 66.2683L87.7694 59.9764L115.901 63.9254L115.906 63.9208ZM128.355 107.241L114.614 122.03L95.3609 100.487L105.114 89.9852L128.36 107.241H128.355ZM70.0361 114.956L82.6275 109.524L97.1421 134.431L79.3812 142.032L70.0406 114.956H70.0361ZM43.5528 114.791L33.475 110.609L43.8458 84.9379L48.9602 86.9971L43.5573 114.791H43.5528ZM37.0143 74.2898L35.9887 69.0321L56.7715 60.5804L37.0189 74.2898H37.0143ZM57.2156 59.0383L36.7396 61.8159L38.7405 55.977L57.2156 59.0337V59.0383ZM39.0977 55.3318L42.4768 49.795L57.6781 58.4068L39.0977 55.3318ZM42.9209 49.2413L47.4538 44.3817L58.168 57.8806L42.9209 49.2413ZM47.9758 43.9195L53.3421 40.0895L58.6808 57.4002L47.9758 43.9195ZM67.0965 35.7012L72.6185 36.1359L60.7687 56.3248L67.0965 35.7058V35.7012ZM73.3648 36.2366L78.1908 38.1493L61.538 56.3843L73.3648 36.2412V36.2366ZM78.8363 38.4742L82.6504 41.7414L62.1652 56.7229L78.8318 38.4696L78.8363 38.4742ZM138.937 89.7792L128.776 106.683L105.544 89.4315L112.769 77.4335L138.941 89.7747L138.937 89.7792ZM151.455 125.503L134.559 143.715L115.562 123.069L129.463 108.087L151.459 125.503H151.455ZM171.569 142.585L152.764 162.875L135.512 144.736L152.522 126.382L171.569 142.59V142.585ZM187.288 157.26L167.934 178.163L153.735 163.881L172.595 143.51L187.283 157.265L187.288 157.26ZM167.407 178.616L144.326 194.956L130.736 180.281L153.213 164.339L167.407 178.62V178.616ZM114.724 159.576L134.981 145.189L152.238 163.332L129.825 179.211L114.724 159.576ZM79.9032 143.326L97.8792 135.621L113.296 158.775L91.4187 168.087L79.9078 143.326H79.9032ZM56.6754 117.39L69.3676 115.143L78.7127 142.224L60.8054 145.308L56.6754 117.395V117.39ZM32.8981 110.192L25.0639 103.232L39.2488 81.1125L43.2322 84.6085L32.8981 110.192ZM36.0208 68.2679L36.5198 62.5435L56.8722 59.7888L36.0208 68.2679ZM53.951 39.7051L59.766 37.1701L59.2623 56.9288L53.951 39.7051ZM79.894 37.5407L100.466 22.3624L108.438 29.1165L83.905 40.9772L79.894 37.5453V37.5407ZM108.955 29.629L114.312 38.8037L86.9911 46.2029L84.3125 41.5492L108.955 29.6244V29.629ZM114.587 39.4489L116.918 50.4539L88.3692 52.449L87.22 46.8664L114.587 39.4489ZM145.109 71.3429L139.23 89.1478L113.076 76.8157L117.27 64.1862L145.109 71.3475V71.3429ZM164.335 104.116L151.871 124.945L129.894 107.543L140.168 90.4153L164.339 104.116H164.335ZM185.823 118.804L171.981 142.022L152.961 125.837L165.502 104.843L185.818 118.804H185.823ZM201.917 132.761L187.7 156.684L173.048 142.965L186.935 119.669L201.917 132.761ZM143.671 195.272L118.57 205.87L105.686 191.012L130.123 180.638L143.671 195.268V195.272ZM92.0872 169.318L114.111 159.923L129.193 179.536L104.811 189.868L92.0826 169.318H92.0872ZM61.1121 146.667L79.2301 143.528L90.7273 168.256L68.6762 171.985L61.1121 146.667ZM43.3192 143.711L44.0747 116.356L55.9794 117.441L60.1002 145.312L43.3192 143.711ZM19.5465 93.3485L36.1352 75.9417L38.7497 80.6091L24.661 102.583L19.5511 93.3485H19.5465ZM74.2256 35.1018L89.7108 18.1297L99.7153 22.0421L79.3217 37.0923L74.2256 35.1018ZM171.78 81.538L164.609 103.47L140.48 89.793L146.414 71.7593L171.775 81.538H171.78ZM194.005 93.7008L186.088 118.145L165.832 104.225L173.053 82.1375L194.005 93.7054V93.7008ZM210.273 106.889L202.173 132.065L187.265 119.038L195.204 94.529L210.268 106.889H210.273ZM69.221 173.312L91.4095 169.542L104.097 190.024L79.5415 194.11L69.2165 173.312H69.221ZM43.4245 145.12L60.407 146.74L67.9436 171.958L47.3073 169.908L43.4245 145.12ZM28.1454 137.387L33.0904 111.959L43.3833 116.196L42.6324 143.477L28.1454 137.382V137.387ZM17.3076 81.6616L34.7067 69.7551L35.8147 75.2645L19.3771 92.5294L17.303 81.689V81.6616H17.3076ZM18.7361 68.181L22.8478 56.2607L37.2982 55.8993L35.1691 62.1545L18.7361 68.1764V68.181ZM23.2507 55.5789L30.16 44.281L41.2222 49.1635L37.5592 55.19L23.2507 55.5744V55.5789ZM30.6179 43.7365L39.8577 33.8434L46.5976 43.256L41.6389 48.587L30.6179 43.7365ZM63.7678 19.9692L59.9354 35.5914L59.8576 35.6051L53.6626 38.3186L51.9318 25.14L63.7724 19.9647L63.7678 19.9692ZM110.292 29.1485L134.816 22.8475L142.6 36.0215L115.759 38.52L110.288 29.1485H110.292ZM142.938 36.6805L146.377 52.5222L118.342 50.4448L115.961 39.1972L142.938 36.6805ZM196.935 69.929L211.752 81.4374L211.798 81.6341L210.323 106.028L195.429 93.8198L196.935 69.929ZM211.61 144.978L198.002 167.922L188.712 157.709L202.901 133.831L211.605 144.978H211.61ZM197.599 168.512L179.046 188.564L168.941 179.133L188.259 158.244L197.599 168.512ZM178.51 189.017L156.382 204.671L145.383 195.917L168.414 179.595L178.51 189.017ZM67.8841 207.43L56.7578 193.195L79.5277 195.533L79.6193 195.519L91.5285 210.048L68.2916 207.613L67.8841 207.439V207.43ZM55.7733 191.657L47.7423 171.354L68.4976 173.418L78.7402 194.046L55.8603 191.698L55.7733 191.662V191.657ZM28.7772 162.014L28.0584 138.86L42.7103 145.029L46.561 169.615L28.8276 162.065L28.7772 162.019V162.014ZM16.3094 126.794L24.4366 104.546L32.4402 111.657L27.5318 136.879L16.3231 126.821L16.3094 126.798V126.794ZM15.8653 125.979L8.66293 112.837L8.63088 112.659L18.6674 94.6343L23.8643 104.033L23.878 104.047L15.8653 125.979ZM5.58146 96.0391L16.1125 82.8879L18.2508 93.8976L18.2645 93.9204L8.42484 111.593L5.55398 96.3686L5.58146 96.0437V96.0391ZM170.379 39.5587L190.461 46.5873L190.552 46.7429L195.401 68.2176L174.715 59.107L174.696 59.0292L170.374 39.5541L170.379 39.5587ZM192.192 47.6443L206.207 58.0957L206.555 58.6722L211.509 80.3666L196.99 69.1007L196.999 68.936L196.976 68.8399L192.192 47.6443ZM211.331 108.152L219.536 120.031L219.522 120.268L211.871 144.178L203.281 133.186L203.3 133.136L211.335 108.152H211.331ZM35.1371 182.656L29.1481 163.712L46.9547 171.262L54.8851 191.277L35.4255 182.917L35.1371 182.656ZM14.3634 148.845L16.0255 128.427L27.3029 138.549L27.3533 138.568L28.063 161.369L14.5145 149.12L14.368 148.85L14.3634 148.845ZM37.8706 28.4576L53.0902 17.5898L51.3228 23.9L51.0939 24.0006L39.6608 32.1778L37.8706 28.4576ZM54.0014 16.9446L54.1937 16.8073L70.5077 9.66889L64.45 18.2396L64.0975 18.3036L52.1516 23.5385L53.9968 16.9446H54.0014ZM78.6486 15.8967L89.9443 5.62379L90.3152 5.55515L106.158 6.71743L90.1824 16.8439L89.926 16.7432L78.6578 15.8921L78.6486 15.8967ZM158.74 22.303L158.859 22.4036L168.424 38.4284L144.202 35.9895L136.34 22.6873L158.74 22.303ZM160.635 22.6507L178.927 27.7803L179.38 28.1555L189.898 45.6492L170.2 38.7579L170.173 38.6252L170.113 38.5291L160.635 22.6507ZM215.891 74.0153L220.3 93.2249L213.176 82.0277L213.208 81.5243L213.185 81.4282L208.812 62.2826L215.891 74.0153ZM220.767 95.252L220.955 96.062L219.609 118.905L211.601 107.332L211.66 107.14V107.053L213.107 83.1854L220.767 95.2566V95.252ZM83.5662 216.651L81.1669 215.617L70.3795 209.229L92.6412 211.562L92.9937 211.503L104.775 218.898L83.5616 216.651H83.5662ZM57.2111 204.342L67.9298 208.968L68.0352 208.977L68.7174 209.05L76.0983 213.42L63.2916 207.883L57.2111 204.337V204.342ZM1.41024 111.853L1.58424 109.954L4.5833 98.7434L7.33053 113.313L7.53199 113.679L4.68403 129.338L1.41024 111.853ZM5.23805 84.4621L4.14832 96.428L4.16663 96.5241L4.28568 97.1602L1.96427 105.841L3.41114 90.0721L5.24263 84.4621H5.23805ZM9.81677 70.8762L13.4202 60.4568L13.5896 60.1777L21.1903 56.7732L17.0511 68.8308L17.0328 69.0367L7.75635 76.834L9.81677 70.8762ZM24.4503 42.7801L37.3486 28.9746L39.1022 32.6079L29.1481 43.2881L24.4503 42.7801ZM142.265 9.3806L123.68 11.664L123.461 11.4764L109.509 6.10426L124.491 2.85536L125.521 2.92858L142.265 9.37603V9.3806ZM180.722 27.6751L182.421 29.0844L180.905 27.9817L180.722 27.6751ZM220.2 122.739L221.427 131.246L221.335 132.825L214.82 153.22L212.75 145.788L212.906 145.527L212.929 145.454L220.2 122.735V122.739ZM214.435 154.432L214.33 154.766L202.379 174.941L198.918 169.125L212.278 146.598L214.44 154.432H214.435ZM200.685 177.499L186.111 193.259L185.571 193.639L180.113 189.465L198.423 169.656L201.967 175.623L200.681 177.499H200.685ZM142.531 217.145L133.818 215.704L157.055 205.897L157.114 205.856L164.12 208.286L143.419 216.999L142.535 217.14L142.531 217.145ZM140.374 217.497L121.336 220.595L112.229 219.671L132.114 216.427L132.609 216.221L140.37 217.502L140.374 217.497ZM81.6843 5.76106L82.2795 5.5643L94.2941 3.31295L91.1897 4.22356L90.2328 4.15492L81.6843 5.76106ZM134.211 4.80012L142.256 6.53439L155.635 11.6777L155.937 11.7921L145.351 9.31654L144.793 8.8498L134.211 4.79555V4.80012ZM221.857 104.39L222.599 111.24L221.628 127.764L220.685 121.216L220.905 120.525V120.438L221.857 104.39Z"
                      fill="#232233"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  width="157"
                  height="106"
                  viewBox="0 0 87 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" duration-300 ease-in-out lg:max-h-[106px] max-h-14 lg:max-w-[157px] max-w-24 scale-50 md:scale-100 "
                >
                  <path
                    d="M53.3634 10.1131L23.0145 46.9446C28.2413 53.0208 33.3416 59.1386 38.3154 65.298C43.2892 71.3742 48.3052 77.5336 53.3634 83.7762H43.5L13.0247 46.8198L43.5 10.1131H53.3634ZM40.2122 90.768H68.4113C62.3416 83.4433 56.2296 76.2018 50.0756 69.0436C44.0058 61.8021 38.0203 54.4358 32.1192 46.9446L68.2849 3.12132H40.2122L4.04651 46.8198L40.2122 90.768ZM38.8212 0H74.8605L86.7471 12.8598L48.3052 59.4299C52.2674 64.424 56.1875 69.2517 60.0654 73.9128C64.0276 78.574 68.032 83.3184 72.0785 88.146L87 106H51.4666L38.6948 93.8893L0 46.8198L38.8212 0Z"
                    fill="#232233"
                  />
                </svg>
              )}
            </button>

            <button
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className={`${rightbtnWidth} flex justify-between items-center xl:px-4  bg-[#232233] rounded-[10px]  text-white font-bold py-2  duration-300 ease-in-out`}
            >
              {!showText && (
                <div className="w-full flex justify-evenly ">
                  <div className="flex flex-col justify-center">
                    <span
                      className={`pt-4 font-porter text-[#8cc540]  xl:text-2xl md:text-lg text-sm  duration-700 ease-in-out`}
                    >
                      GROW WITH US
                    </span>
                    <span className="font-poppins text-white xl:text-lg text-sm">
                      Learn More
                    </span>
                  </div>
                </div>
              )}
              <svg
                width="157"
                height="106"
                viewBox="0 0 87 106"
                fill="#8cc540"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  !showText ? "scale-50" : ""
                }  duration-300 ease-in-out scale-50 lg:scale-100`}
              >
                <path
                  d="M61.8723 46.8198C56.8215 53.0624 51.7286 59.2218 46.5936 65.298C41.5428 71.3742 36.4499 77.5336 31.315 83.7762H21.5922C26.7271 77.7 31.7779 71.5822 36.7446 65.4228C41.7112 59.2634 46.7199 53.104 51.7707 46.9446C46.6357 40.7852 41.5849 34.6674 36.6183 28.5913C31.6517 22.5151 26.643 16.3557 21.5922 10.1131H31.315L61.8723 46.8198ZM6.69231 3.12132C12.7533 10.446 18.73 17.7707 24.6226 25.0954C30.5994 32.3369 36.6183 39.6199 42.6792 46.9446L6.56604 90.768H34.7242L70.8374 46.8198L34.7242 3.12132H6.69231ZM48.6139 12.8598L87 59.3051L48.7402 106H13.3846L0 93.8893L38.6386 46.9446C29.463 35.7911 21.6763 26.3023 15.2787 18.4782C8.88099 10.6541 3.7881 4.4947 0 0H36.1132L48.6139 12.8598Z"
                  fill="#8CC540"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/space.png')] bg-[#232233] xl:h-full h-[1100px]  bg-cover xl:py-20 py-5">
        <div className="flex xl:flex-row flex-col justify-center items-center md:p-20 p-10">
          <div
            onMouseEnter={() => handleCardClick("card1")}
            className={`relative min-h-[275px]  xl:h-[25rem] w-[25rem] rounded-3xl overflow-hidden xl:min-w-[25rem] cursor-pointer bg-[url('/assets/Group40.png')] bg-cover p-8 m-4 flex items-center justify-center gap-10 text-center text-white font-poppins transition-transform duration-500  ${
              activeCard === "card1" ? "xl:rotate-0" : "xl:rotate-45"
            }`}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transform px-10 ${
                activeCard === "card1" || isMobile
                  ? "xl:rotate-0"
                  : "xl:-rotate-45 hidden"
              } `}
            >
              <h3 className="absolute top-6 font-bold text-3xl">WHAT WE DO</h3>
              <div className="block md:flex flex-col items-center xl:mt-24 mt-4">
                <p className="font-medium text-xl">
                  Driving traffic from low-cost ads to higher-paying search
                  results.
                </p>

                <div
                  id="button"
                  className="hidden xl:flex group  mx-auto z-40  mt-20  h-12 duration-1000 w-72   "
                  type="submit"
                >
                  <button
                    className=" group-hover:text-black w-60 h-full text-xl bg-transparent border-t-[1px] border-b-[1px] border-l-[1px] border-white bg-white text-black font-semibold rounded-tl-full rounded-bl-full   duration-500 group-hover:bg-white group-hover:border-none   group-hover:rounded-full "
                    id="btn1"
                  >
                    Connect With Us!
                  </button>
                  <button
                    className="w-12 h-full  bg-transparent  bg-white text-black border-t-[1px] border-r-[1px] border-b-[1px] border-white font-bold rounded-tr-full rounded-br-full flex justify-start items-center   duration-500 group-hover:bg-white group-hover:border-none   group-hover:rounded-full  "
                    id="btn2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6  duration-300 group-hover:translate-x-3 group-hover:text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => handleCardClick("card2")}
            className={`relative min-h-[275px] xl:h-[25rem] w-[25rem] rounded-3xl overflow-hidden xl:min-w-[25rem] cursor-pointer bg-[url('/assets/Group38.png')] bg-cover p-8 m-4 flex items-center justify-center gap-10 text-center text-white font-poppins transition-transform duration-500  ${
              activeCard === "card2" ? "xl:rotate-0" : "xl:rotate-45"
            }`}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transform px-10 ${
                activeCard === "card2" || isMobile
                  ? "xl:rotate-0"
                  : "xl:-rotate-45 hidden"
              } `}
            >
              <h3 className="absolute top-6 font-bold text-3xl">HOW WE DO</h3>
              <div className="block md:flex flex-col items-center xl:mt-24 mt-4">
                <p className="font-medium text-xl">
                  By conducting thorough keyword research and utilizing
                  resources.
                </p>
                <div
                  id="button"
                  className="hidden xl:flex group  mx-auto z-40  mt-20  h-12 duration-1000 w-72   "
                  type="submit"
                >
                  <button
                    className=" group-hover:text-black w-60 h-full text-xl bg-transparent border-t-[1px] border-b-[1px] border-l-[1px] border-white  bg-white text-black font-semibold rounded-tl-full rounded-bl-full   duration-500 group-hover:bg-white group-hover:border-none   group-hover:rounded-full "
                    id="btn1"
                  >
                    Connect With Us!
                  </button>
                  <button
                    className="w-12 h-full  bg-transparent  bg-white text-black  border-t-[1px] border-r-[1px] border-b-[1px] border-white font-bold rounded-tr-full rounded-br-full flex justify-start items-center   duration-500 group-hover:bg-white group-hover:border-none   group-hover:rounded-full  "
                    id="btn2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6  duration-300 group-hover:translate-x-3 group-hover:text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => handleCardClick("card3")}
            className={`relative min-h-[275px] xl:h-[25rem] w-[25rem] rounded-3xl overflow-hidden xl:min-w-[25rem] cursor-pointer bg-[url('/assets/Group39.png')] bg-cover p-8 m-4 flex items-center justify-center gap-10 text-center text-white font-poppins transition-transform duration-500  ${
              activeCard === "card3" ? "xl:rotate-0" : "xl:rotate-45"
            }`}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transform px-10 ${
                activeCard === "card3" || isMobile
                  ? "xl:rotate-0"
                  : "xl:-rotate-45 hidden"
              } `}
            >
              <h3 className="absolute top-6 font-bold text-3xl">OUR PURPOSE</h3>

              <div className="block md:flex flex-col items-center xl:mt-24 mt-4">
                <p className="font-medium text-xl">
                  Maximizing profit by bridging the gap between ad costs and
                  revenue.
                </p>
                <div
                  id="button"
                  className="hidden xl:flex group  mx-auto z-40  mt-20  h-12 duration-1000 w-72   "
                  type="submit"
                >
                  <button
                    className="group-hover:text-black w-60 h-full text-xl bg-transparent border-t-[1px] border-b-[1px] border-l-[1px] border-white bg-white text-black font-semibold rounded-tl-full rounded-bl-full  duration-500 group-hover:bg-white group-hover:border-none group-hover:rounded-full"
                    id="btn1"
                  >
                    Connect With Us!
                  </button>
                  <button
                    className="w-12 h-full bg-transparent bg-white text-black border-t-[1px] border-r-[1px] border-b-[1px] border-white font-bold rounded-tr-full rounded-br-full flex justify-start items-center  duration-500 group-hover:bg-white group-hover:border-none group-hover:rounded-full"
                    id="btn2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6  duration-300 group-hover:translate-x-3 group-hover:text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArbitrage;
