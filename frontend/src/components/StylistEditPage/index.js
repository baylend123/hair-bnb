import React from "react";
import { useSelector } from "react-redux";


function StylistEditPage() {
  const stylist = useSelector(state => state?.session?.stylist);

  return (
    <div>
      <div></div>
    </div>
  )
};


export default StylistEditPage;
