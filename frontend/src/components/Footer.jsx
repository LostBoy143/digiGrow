const Footer = () => {
  return (
    <div id="footer">
      <div className="w-full h-60 md:h-64 px-8 flex justify-between sm:justify-evenly pt-6 font-sans text-xl text-[#232233]">
        {/* <img className="w-full h-96 absolute" src={Img2}></img> */}
        <div className="min-w-[130px] min-h-[120px] py-1 px-2 sm:px-4">
          <img
            src="/assets/DigiGrove Logo (Final-2) 1.png"
            className="min-w-[130px] min-h-[120px] w-64 sm:w-64 h-42  aspect-auto object-fill"
          ></img>
        </div>
        <div className="  w-96 sm:p-2 md:p-4 m-1 md:m-2">
          <ul className="font-poppins flex flex-col gap-3 md:gap-6 text-[12px] sm:text-lg">
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className=" sm:w-96 p-2 md:p-4  md:m-2 ">
          <ul className="font-poppins flex flex-col gap-3 md:gap-6 text-[12px] sm:text-lg">
            <li>Admin@digigrove.com</li>
            <li>
              Plot No. 334, 5th Floor, Udyog Vihar, Phase IV, Sector 18,
              Gurugram, Haryana, 122015
            </li>
          </ul>
          <span className="flex items-center gap-4 pt-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.25 5.25H6.75C5.92031 5.25 5.25 5.92031 5.25 6.75V41.25C5.25 42.0797 5.92031 42.75 6.75 42.75H41.25C42.0797 42.75 42.75 42.0797 42.75 41.25V6.75C42.75 5.92031 42.0797 5.25 41.25 5.25ZM16.3734 37.2047H10.8094V19.3078H16.3734V37.2047ZM13.5938 16.8609C12.9559 16.8609 12.3324 16.6718 11.802 16.3174C11.2717 15.9631 10.8583 15.4594 10.6142 14.8701C10.3701 14.2808 10.3063 13.6324 10.4307 13.0068C10.5552 12.3812 10.8623 11.8065 11.3133 11.3555C11.7644 10.9045 12.339 10.5973 12.9646 10.4729C13.5902 10.3485 14.2386 10.4123 14.8279 10.6564C15.4172 10.9005 15.9209 11.3139 16.2752 11.8442C16.6296 12.3746 16.8187 12.9981 16.8187 13.6359C16.8141 15.4172 15.3703 16.8609 13.5938 16.8609ZM37.2047 37.2047H31.6453V28.5C31.6453 26.4234 31.6078 23.7562 28.7531 23.7562C25.8609 23.7562 25.4156 26.0156 25.4156 28.35V37.2047H19.8609V19.3078H25.1953V21.7547H25.2703C26.0109 20.3484 27.825 18.8625 30.5344 18.8625C36.1688 18.8625 37.2047 22.5703 37.2047 27.3891V37.2047Z"
                fill="#232233"
              />
            </svg>
            <svg
              width="30"
              height="26"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.502 0H37.636L24.236 15.25L40 36H27.656L17.99 23.414L6.928 36H0.788L15.122 19.69L0 0H12.656L21.396 11.504L31.502 0ZM29.35 32.344H32.75L10.808 3.464H7.16L29.35 32.344Z"
                fill="#232233"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z"
                fill="#232233"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="m-auto text-center text-base flex items-center justify-center space-x-1  pb-8">
        <p className="flex gap-2 pt-2 items-center justify-center">
          <span>Copyright</span>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.88 7.14C11.16 7.2 11.49 8.29 11.51 8.8H13.3C13.22 6.82 11.81 5.61 9.85 5.61C7.64 5.61 6 7 6 10.14C6 12.08 6.93 14.38 9.84 14.38C12.06 14.38 13.25 12.73 13.28 11.43H11.49C11.46 12.02 11.04 12.81 9.86 12.87C8.55 12.83 8 11.81 8 10.14C8 7.25 9.28 7.16 9.88 7.14ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="text-[12px] sm:text-[16px]">
            2024, All Rights Reserved
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
