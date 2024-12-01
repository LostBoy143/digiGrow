import React, { useEffect } from "react";
import Email from "../components/Email";
import Choose from "../components/Choose";

const EmailLeadPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Email />
      <Choose />
    </>
  );
};

export default EmailLeadPage;
