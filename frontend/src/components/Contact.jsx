/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import Form from "./Form";
import Button from "./Button";

const Contact = () => {
  const [rotate, setRotate] = useState("");
  const handleHover = () => {
    setRotate("rotate-90");
  };
  const handleHoverLeave = () => {
    setRotate("");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const change = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "mail") {
      setEmail(e.target.value);
    } else {
      setMsg(e.target.value);
    }
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    console.log("submitted");
  };
  return (
    <div
      id="contact-section"
      className="h-[110vh] relative mb-20 overflow-hidden w-full  flex flex-col bg-black"
    >
      <h1 className="h-[15%] absolute  text-white w-full font-extrabold text-6xl flex items-center justify-center">
        Let’s Build{" "}
        <span className="ml-[2%] text-[#8cc540]">
          Together
        </span>
      </h1>
      <div
        id="slogan"
        className="absolute top-[20%] text-right right-[5%] text-white text-4xl"
      >
        <h2>Interested in driving growth?</h2>
        <h2>Have a general question?</h2>
        <h2>We are just an email away!</h2>
      </div>
      <div
        id="down"
        className="w-full h-[85%] flex relative"
      >
        <div
          id="left"
          className="w-[43%]  flex items-center justify-end h-[110vhvh] "
        >
          <form
            onSubmit={(e) => {
              submitHandle(e);
            }}
            className="  mt-[30%] border-[1px] border-zinc-100  bg-black rounded-3xl bg-opacity-10 backdrop-blur-2xl flex-col gap-2 w-[80%] h-[90%]   flex items-center justify-evenly py-6 px-6"
          >
            <h2 className="w-full flex justify-start md:text-3xl text-[106px] font-bold text-white">
              Contact Us
            </h2>

            <input
              className="w-full h-[10%] p-2  bg-transparent border-[1px] border-white outline-none  rounded-lg text-white"
              type="text"
              name="name"
              value={name}
              onChange={(e) => change(e)}
              placeholder="Name"
            />
            <input
              className="w-full h-[10%] p-2 bg-transparent border-[1px] border-white  outline-none rounded-lg text-white"
              type="text"
              name="mail"
              value={email}
              onChange={(e) => change(e)}
              placeholder="Email"
            />
            <textarea
              className="w-full h-[30%] p-2 bg-transparent border-[1px] border-white  outline-none rounded-lg text-white"
              type="text"
              name="msg"
              value={msg}
              onChange={(e) => change(e)}
              placeholder="Message"
            />

            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
            >
              <Button />
            </div>
          </form>
        </div>
        <div
          id="right"
          className="h-full mr-[-50%] w-[57%]  "
        >
          <svg
            className={`h-[900px] -mt-[20%] w-[900px] ${rotate} transform transition-transform duration-500  `}
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="object-img"
          >
            <g opacity="0.2">
              <path
                d="M447.765 535.256C447.765 535.256 447.765 535.098 447.765 535.066L462.917 449.181C462.98 448.8 463.329 448.26 463.647 448.038C463.965 447.815 464.6 447.688 464.981 447.752L550.869 462.902C551.25 462.966 551.79 463.315 552.012 463.633C552.235 463.95 552.362 464.586 552.298 464.967L537.147 550.852C536.988 551.805 536.067 552.472 535.082 552.281L449.195 537.13C448.814 537.067 448.274 536.718 448.051 536.4C447.861 536.146 447.734 535.638 447.734 535.288L447.765 535.256ZM465.521 450.737L450.751 534.494L534.511 549.264L549.281 465.507L465.521 450.737Z"
                fill="white"
              />
              <path
                d="M440.173 533.509C440.173 533.509 440.173 533.191 440.237 533.033L464.758 441.494C465.012 440.541 465.997 439.969 466.949 440.223L558.491 464.744C558.84 464.839 559.412 465.252 559.571 465.57C559.761 465.887 559.857 466.586 559.761 466.935L535.24 558.474C534.986 559.427 534.002 559.999 533.049 559.744L441.507 535.224C441.158 535.129 440.586 534.716 440.427 534.398C440.268 534.112 440.173 533.827 440.173 533.509ZM467.235 443.241L443.254 532.778L532.795 556.759L556.776 467.221L467.235 443.241Z"
                fill="white"
              />
              <path
                d="M432.202 530.746C432.202 530.524 432.202 530.302 432.297 530.175L467.522 433.363C467.649 433.014 468.126 432.474 468.475 432.315C468.92 432.093 469.428 432.093 469.873 432.252L566.687 467.476C567.036 467.603 567.576 468.08 567.735 468.429C567.894 468.778 567.926 469.477 567.799 469.826L532.573 566.638C532.446 566.987 531.97 567.527 531.62 567.686C531.271 567.844 530.572 567.876 530.223 567.749L433.409 532.525C433.059 532.398 432.519 531.922 432.36 531.572C432.265 531.382 432.233 531.064 432.233 530.746L432.202 530.746ZM469.841 435.269L435.283 530.175L530.191 564.732L564.749 469.826L469.841 435.269Z"
                fill="white"
              />
              <path
                d="M423.784 527.125C423.784 526.807 423.847 526.489 423.911 526.299L471.238 424.819C471.682 423.897 472.794 423.485 473.715 423.898L575.199 471.223C575.548 471.382 576.024 471.922 576.152 472.271C576.31 472.748 576.31 473.256 576.088 473.701L528.761 575.181C528.602 575.53 528.062 576.006 527.713 576.134C527.363 576.261 526.633 576.229 526.283 576.07L424.8 528.744C424.451 528.586 423.974 528.046 423.847 527.696C423.784 527.537 423.752 527.347 423.752 527.093L423.784 527.125ZM473.398 426.883L426.896 526.585L526.601 573.084L573.102 473.383L473.398 426.883Z"
                fill="white"
              />
              <path
                d="M414.987 522.265C414.987 521.948 415.082 521.598 415.241 521.313L476.099 415.894C476.639 414.973 477.782 414.655 478.704 415.195L584.126 476.051C585.047 476.591 585.364 477.767 584.824 478.656L523.966 584.075C523.426 584.996 522.283 585.313 521.362 584.773L415.94 523.917C415.495 523.663 415.177 523.25 415.05 522.774C415.018 522.615 414.987 522.456 414.987 522.265ZM478.1 418.149L418.163 521.948L521.933 581.883L581.87 478.084L478.068 418.181L478.1 418.149Z"
                fill="white"
              />
              <path
                d="M405.932 516.23C405.932 515.818 406.059 515.436 406.282 515.119L482.164 406.746C482.45 406.333 482.895 406.048 483.435 405.952C483.943 405.857 484.483 405.952 484.896 406.27L593.272 482.15C594.161 482.753 594.383 483.992 593.748 484.881L517.866 593.254C517.262 594.143 516.024 594.334 515.134 593.73L406.758 517.85C406.345 517.564 406.059 517.088 405.964 516.58C405.964 516.453 405.964 516.358 405.964 516.23L405.932 516.23ZM484.006 409.128L409.14 516.04L516.055 590.903L590.921 483.992L484.006 409.128Z"
                fill="white"
              />
              <path
                d="M396.723 508.862C396.723 508.417 396.882 507.941 397.199 507.591L489.63 397.44C489.979 397.027 490.456 396.773 490.996 396.741C491.536 396.71 492.044 396.868 492.457 397.186L602.612 489.614C603.025 489.963 603.279 490.44 603.31 490.98C603.342 491.52 603.183 492.028 602.834 492.441L510.403 602.592C510.054 603.005 509.577 603.259 509.037 603.291C508.497 603.322 507.989 603.164 507.576 602.846L397.422 510.418C396.945 510.037 396.723 509.465 396.723 508.893L396.723 508.862ZM491.25 399.918L399.899 508.766L508.751 600.114L600.102 491.265L491.25 399.918Z"
                fill="white"
              />
              <path
                d="M387.448 500C387.448 499.46 387.67 498.92 388.052 498.539L498.587 388.007C498.969 387.626 499.477 387.403 500.049 387.403C500.62 387.403 501.097 387.626 501.51 388.007L612.045 498.539C612.808 499.301 612.808 500.667 612.045 501.429L501.51 611.962C501.128 612.343 500.62 612.565 500.049 612.565C499.477 612.565 499 612.343 498.587 611.962L388.052 501.429C387.67 501.048 387.448 500.54 387.448 499.968L387.448 500ZM500.017 390.611L390.624 500L500.017 609.389L609.409 500L500.017 390.611Z"
                fill="white"
              />
              <path
                d="M378.235 489.55C378.235 489.55 378.235 489.423 378.235 489.359C378.299 488.788 378.553 488.279 378.966 487.93L509.131 378.732C510.02 378.001 511.354 378.096 512.085 378.986L621.287 509.147C621.636 509.592 621.827 510.132 621.763 510.672C621.7 511.243 621.446 511.752 621.033 512.101L490.867 621.299C489.978 622.03 488.644 621.935 487.913 621.045L378.711 490.884C378.394 490.503 378.235 490.026 378.235 489.55ZM510.402 381.368L381.38 489.613L489.628 618.631L618.651 510.386L510.402 381.368Z"
                fill="white"
              />
              <path
                d="M369.246 477.322C369.246 477.322 369.246 477.068 369.278 476.941C369.373 476.369 369.691 475.861 370.167 475.543L521.455 369.617C521.932 369.299 522.503 369.172 523.075 369.267C523.647 369.363 524.155 369.68 524.473 370.157L630.403 521.44C630.72 521.916 630.848 522.488 630.752 523.06C630.657 523.631 630.339 524.14 629.863 524.457L478.575 630.384C478.098 630.702 477.527 630.829 476.955 630.733C476.383 630.638 475.875 630.321 475.557 629.844L369.627 478.561C369.373 478.18 369.246 477.767 369.246 477.322ZM522.535 372.348L372.391 477.481L477.527 627.621L627.671 522.488L522.535 372.348Z"
                fill="white"
              />
              <path
                d="M360.67 463.283C360.67 463.092 360.67 462.901 360.734 462.711C360.893 462.139 361.242 461.663 361.782 461.345L535.622 360.977C536.702 360.373 538.036 360.723 538.671 361.803L639.043 535.637C639.329 536.145 639.424 536.749 639.265 537.32C639.106 537.892 638.757 538.368 638.217 538.686L464.377 639.054C463.297 639.658 461.963 639.309 461.328 638.229L360.956 464.394C360.766 464.045 360.67 463.664 360.67 463.283ZM536.543 363.74L363.783 463.473L463.52 636.228L636.28 536.494L536.543 363.74Z"
                fill="white"
              />
              <path
                d="M352.73 447.243C352.73 446.989 352.762 446.703 352.857 446.449C353.079 445.877 353.492 445.401 354.032 445.146L551.79 352.941C552.933 352.401 554.299 352.909 554.839 354.053L647.048 551.804C647.302 552.376 647.333 552.979 647.111 553.551C646.889 554.122 646.476 554.599 645.936 554.853L448.178 647.059C447.035 647.599 445.669 647.09 445.129 645.947L352.921 448.196C352.762 447.878 352.698 447.56 352.698 447.211L352.73 447.243ZM552.52 355.768L355.779 447.497L447.511 644.232L644.252 552.503L552.52 355.768Z"
                fill="white"
              />
              <path
                d="M345.647 429.138C345.647 428.789 345.711 428.471 345.869 428.153C346.124 427.582 346.6 427.137 347.203 426.915L570.054 345.794C570.657 345.572 571.293 345.604 571.864 345.858C572.436 346.112 572.881 346.588 573.103 347.192L654.226 570.035C654.449 570.639 654.417 571.274 654.163 571.845C653.909 572.417 653.432 572.862 652.829 573.084L429.947 654.205C428.708 654.649 427.342 654.014 426.897 652.776L345.774 429.9C345.679 429.646 345.615 429.36 345.615 429.075L345.647 429.138ZM570.594 348.621L348.633 429.392L429.438 651.346L651.399 570.575L570.594 348.621Z"
                fill="white"
              />
              <path
                d="M339.707 408.875C339.707 407.795 340.437 406.81 341.517 406.493L590.541 339.76C591.843 339.411 593.209 340.205 593.558 341.507L660.293 590.522C660.451 591.158 660.388 591.825 660.038 592.396C659.689 592.968 659.181 593.381 658.546 593.54L409.522 660.272C408.22 660.622 406.854 659.828 406.505 658.525L339.77 409.51C339.707 409.288 339.675 409.097 339.675 408.875L339.707 408.875ZM590.89 342.619L342.661 409.129L409.173 657.382L657.434 590.872L590.922 342.619L590.89 342.619Z"
                fill="white"
              />
              <path
                d="M335.165 386.355C335.165 385.148 336.022 384.068 337.261 383.845L613.22 335.186C614.585 334.932 615.92 335.853 616.174 337.25L664.835 613.2C665.089 614.597 664.168 615.9 662.77 616.154L386.812 664.813C386.145 664.94 385.478 664.813 384.906 664.401C384.334 664.019 383.985 663.416 383.858 662.749L335.197 386.799C335.197 386.799 335.165 386.513 335.165 386.355ZM613.41 338.044L338.055 386.609L386.621 661.955L661.976 613.391L613.41 338.044Z"
                fill="white"
              />
              <path
                d="M332.402 361.581C332.402 360.977 332.624 360.374 333.005 359.897C333.45 359.358 334.085 359.04 334.784 358.976L638.186 332.423C639.647 332.296 640.918 333.376 641.045 334.837L667.599 638.229C667.662 638.928 667.44 639.627 666.995 640.167C666.551 640.707 665.915 641.024 665.216 641.088L361.815 667.641C360.353 667.768 359.083 666.688 358.956 665.227L332.402 361.835C332.402 361.835 332.402 361.676 332.402 361.613L332.402 361.581ZM664.772 638.229L638.25 335.028L335.07 361.771L361.815 664.941L664.804 638.229L664.772 638.229Z"
                fill="white"
              />
              <path
                d="M331.735 665.512L331.735 334.455C331.735 332.931 332.974 331.724 334.466 331.724L665.534 331.724C667.059 331.724 668.266 332.962 668.266 334.455L668.266 665.512C668.266 667.037 667.027 668.276 665.534 668.276L334.466 668.275C332.942 668.275 331.735 667.037 331.735 665.512ZM665.439 334.487L334.466 334.582L334.562 665.544L665.407 665.449L665.407 334.487L665.439 334.487Z"
                fill="white"
              />
              <path
                d="M302.227 663.543C302.227 663.543 302.227 663.384 302.227 663.289L333.577 304.821C333.704 303.233 335.102 302.09 336.69 302.217L695.169 333.566C696.757 333.693 697.901 335.091 697.774 336.679L666.423 695.146C666.296 696.703 664.899 697.878 663.311 697.751L304.831 666.402C303.338 666.275 302.227 665.004 302.227 663.543ZM694.947 336.456L336.467 305.075L305.085 663.543L663.565 694.924L694.915 336.456L694.947 336.456Z"
                fill="white"
              />
              <path
                d="M270.464 658.652C270.464 658.462 270.464 658.303 270.496 658.112L338.405 272.933C338.533 272.138 338.977 271.471 339.644 270.995C340.311 270.55 341.105 270.36 341.868 270.487L727.06 338.394C728.68 338.68 729.76 340.237 729.474 341.856L661.564 727.036C661.437 727.83 660.992 728.497 660.325 728.974C659.658 729.418 658.864 729.609 658.102 729.482L272.91 661.574C272.116 661.447 271.449 661.003 270.972 660.336C270.623 659.827 270.432 659.224 270.432 658.62L270.464 658.652ZM726.71 341.38L341.391 273.314L273.323 658.62L658.642 726.687C658.642 726.687 658.801 726.623 658.801 726.592L726.71 341.412L726.71 341.38Z"
                fill="white"
              />
              <path
                d="M236.54 650.33C236.54 650.044 236.572 649.79 236.635 649.504L346.663 238.851C346.885 238.057 347.393 237.358 348.124 236.945C348.854 236.532 349.68 236.405 350.506 236.628L761.172 346.652C761.966 346.874 762.665 347.382 763.078 348.113C763.491 348.844 763.618 349.669 763.396 350.495L653.368 761.148C653.146 761.942 652.637 762.641 651.907 763.054C651.176 763.467 650.35 763.594 649.525 763.372L238.859 653.347C238.064 653.125 237.366 652.617 236.953 651.886C236.667 651.41 236.54 650.87 236.54 650.33ZM760.632 349.701C760.632 349.701 760.537 349.447 760.442 349.415L349.776 239.391C349.776 239.391 349.49 239.455 349.426 239.582L239.399 650.235C239.399 650.235 239.462 650.521 239.589 650.552L650.255 760.577C650.255 760.577 650.573 760.513 650.605 760.386L760.632 349.733C760.632 349.733 760.632 349.701 760.632 349.669L760.632 349.701Z"
                fill="white"
              />
              <path
                d="M200.584 638.101C200.584 637.72 200.648 637.371 200.775 636.99L358.828 202.738C359.432 201.054 361.338 200.165 363.021 200.768L797.287 358.849C798.113 359.134 798.748 359.738 799.13 360.532C799.511 361.326 799.542 362.215 799.225 363.041L641.171 797.294C640.568 798.977 638.662 799.866 636.978 799.263L202.712 641.214C201.378 640.738 200.552 639.467 200.552 638.133L200.584 638.101ZM796.588 361.93C796.588 361.771 796.461 361.548 796.334 361.485L362.068 203.436C361.846 203.373 361.624 203.468 361.528 203.69L203.475 637.943C203.379 638.165 203.506 638.419 203.729 638.483L637.995 796.531C638.217 796.595 638.44 796.499 638.535 796.277L796.588 362.025C796.588 362.025 796.588 361.961 796.588 361.93Z"
                fill="white"
              />
              <path
                d="M162.818 621.458C162.818 620.982 162.914 620.474 163.136 619.997L375.441 164.814C376.235 163.099 378.3 162.368 380.015 163.162L835.245 375.429C836.96 376.223 837.69 378.256 836.896 380.003L624.623 835.218C624.242 836.044 623.543 836.679 622.685 836.997C621.828 837.314 620.907 837.282 620.049 836.87L164.819 624.603C163.581 624.031 162.85 622.793 162.85 621.49L162.818 621.458ZM834.355 378.541C834.355 378.319 834.228 378.097 834.006 378.002L378.776 165.735C378.49 165.608 378.141 165.735 378.014 166.021L165.741 621.236C165.613 621.522 165.741 621.871 166.026 621.998L621.256 834.265C621.51 834.392 621.923 834.233 622.018 833.979L834.324 378.764C834.324 378.764 834.387 378.605 834.387 378.51L834.355 378.541Z"
                fill="white"
              />
              <path
                d="M123.495 599.923C123.495 599.288 123.653 598.684 123.971 598.113L396.976 125.301C397.96 123.586 400.184 122.983 401.899 123.967L874.725 396.963C875.551 397.44 876.155 398.234 876.409 399.155C876.663 400.076 876.536 401.06 876.059 401.886L603.055 874.698C602.579 875.524 601.784 876.127 600.863 876.381C599.942 876.635 598.958 876.508 598.132 876.032L125.305 603.036C124.479 602.559 123.876 601.765 123.622 600.844C123.526 600.527 123.495 600.209 123.495 599.891L123.495 599.923ZM873.677 400.139C873.677 399.853 873.55 399.568 873.328 399.441L400.47 126.445C400.12 126.222 399.644 126.349 399.421 126.731L126.417 599.542C126.322 599.701 126.29 599.923 126.353 600.114C126.417 600.304 126.544 600.463 126.703 600.558L599.529 873.554C599.72 873.65 599.91 873.681 600.101 873.618C600.292 873.554 600.45 873.427 600.546 873.268L873.582 400.457C873.582 400.457 873.645 400.266 873.645 400.139L873.677 400.139Z"
                fill="white"
              />
              <path
                d="M82.9661 572.862C82.9661 572.1 83.1885 571.338 83.6649 570.703L424.039 84.5826C424.611 83.7568 425.5 83.1851 426.485 83.0263C427.469 82.8357 428.486 83.0581 429.312 83.6615L915.479 424.025C916.305 424.597 916.876 425.486 917.035 426.471C917.226 427.455 917.003 428.472 916.4 429.297L575.994 915.417C575.422 916.243 574.533 916.815 573.548 916.974C572.564 917.164 571.547 916.942 570.721 916.338L84.586 575.943C83.7601 575.372 83.1884 574.482 83.0296 573.498C82.9978 573.275 82.9661 573.053 82.9661 572.831L82.9661 572.862ZM914.24 427.138C914.24 427.138 914.24 427.042 914.24 426.979C914.208 426.725 914.049 426.502 913.859 426.375L427.692 85.9802C427.469 85.8214 427.247 85.7896 426.993 85.8214C426.739 85.8531 426.517 86.0119 426.389 86.2025L85.9836 572.322C85.8247 572.513 85.793 572.767 85.8248 573.021C85.8565 573.275 86.0154 573.498 86.2059 573.625L572.341 914.02C572.564 914.179 572.786 914.21 573.04 914.179C573.294 914.147 573.516 913.988 573.644 913.798L914.049 427.678C914.177 427.519 914.208 427.328 914.208 427.138L914.24 427.138Z"
                fill="white"
              />
              <path
                d="M41.6093 539.735C41.6093 538.782 41.927 537.892 42.5305 537.162L457.199 43.0379C458.628 41.3545 461.137 41.1322 462.821 42.5297L956.992 457.185C958.676 458.614 958.898 461.123 957.5 462.807L542.864 956.931C541.435 958.614 538.925 958.836 537.242 957.407L43.1022 542.784C42.2763 542.085 41.7682 541.132 41.6729 540.052C41.6729 539.925 41.6729 539.798 41.6729 539.703L41.6093 539.735ZM955.563 460.234C955.563 459.916 955.436 459.567 955.15 459.345L461.01 44.7531C460.534 44.3402 459.803 44.4037 459.39 44.8801L44.7539 539.004C44.5633 539.226 44.468 539.512 44.4998 539.83C44.4998 540.148 44.6586 540.402 44.9127 540.624L539.052 955.247C539.529 955.66 540.259 955.597 540.672 955.12L955.309 460.996C955.499 460.774 955.563 460.52 955.563 460.266L955.563 460.234Z"
                fill="white"
              />
              <path
                d="M0.000344355 500C0.000344405 498.857 0.444986 497.808 1.23905 497.014L497.03 1.2387C498.682 -0.41293 501.35 -0.41293 503.002 1.2387L998.793 497.014C1000.38 498.602 1000.38 501.398 998.793 502.986L503.002 998.761C501.35 1000.41 498.682 1000.41 497.03 998.761L1.23905 502.986C0.444985 502.192 0.000344307 501.112 0.000344355 500ZM997.205 500C997.205 499.619 997.078 499.301 996.792 499.015L501.001 3.23972C500.747 2.98562 500.397 2.82681 500.016 2.82681C499.635 2.82681 499.317 2.98562 499.032 3.23972L3.24015 499.015C2.73191 499.524 2.73191 500.445 3.24015 500.953L499.031 996.728C499.286 996.983 499.635 997.141 500.016 997.141C500.397 997.141 500.715 996.983 501.001 996.728L996.792 500.985C997.046 500.731 997.205 500.381 997.205 500Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
