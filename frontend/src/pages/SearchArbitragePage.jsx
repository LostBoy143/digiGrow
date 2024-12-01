import { useEffect } from "react";
import SearchArbitrage from "../components/SearchArbitrage";


const SearchArbitragePage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return <SearchArbitrage />;
};

export default SearchArbitragePage;
