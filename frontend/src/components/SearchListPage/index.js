import React, { useEffect } from "react";
import { NavBar } from "../NavBarComponent";
import { Search } from "../SearchComponent";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import StylistCard from "./StylistCard";


function SearchListPage() {
  const stylists = useSelector((state) => Object.values(state?.search));


  return (
    <div className="splash">
      <div>
          <NavBar />
      </div>
      <div>
          <Search />
      </div>
      <div className="style-list">
        {stylists.map(stylist => {
          return (
            <NavLink to={`/stylist/${stylist.id}`}>
              <StylistCard stylist={stylist} />
            </NavLink>
          )
        })}
      </div>
      <div>Map Place Holder</div>
    </div>
  )
};

export default SearchListPage;
