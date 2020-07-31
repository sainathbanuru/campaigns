import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import Header from "./Header";

const SearchContainer = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <SearchList />
    </div>
  );
};

export default SearchContainer;
