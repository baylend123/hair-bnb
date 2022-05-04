import React, { useEffect } from "react";
import { NavBar } from "../NavBarComponent";
import { Search } from "../SearchComponent";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import StylistCard from "./StylistCard";
import * as searchActions from '../../store/search';


function SearchListPage() {
  const stylists = useSelector((state) => Object.values(state?.search));
  const { city, state } = useParams();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(searchActions.getStylists(city, state))
  }, []);


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
