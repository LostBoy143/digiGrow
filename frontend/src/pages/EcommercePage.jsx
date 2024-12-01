import { useEffect } from "react";
import ECommerceMarketing from "../components/ECommerceMarketing";

const EcommercePage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return <ECommerceMarketing />;
};

export default EcommercePage;
