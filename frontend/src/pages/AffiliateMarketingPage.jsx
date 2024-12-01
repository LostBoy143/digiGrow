import { useEffect } from "react";
import Affiliate from "../components/Affiliate";

const AffiliateMarketingPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return <Affiliate />;
};

export default AffiliateMarketingPage;
