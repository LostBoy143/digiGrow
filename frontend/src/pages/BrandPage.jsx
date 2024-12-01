import { useEffect } from "react";
import DesignBrandStrategy from "../components/DesignBrandStrategy";

const BrandPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return <DesignBrandStrategy />;
};

export default BrandPage;
