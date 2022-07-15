import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const handleChange = (ev) => {
    const searchTitleValue = ev.target.value.length > 2 ? ev.target.value : "";
    props.onSearchTitle(
      searchTitleValue,
      (page) => agent.Items.byTitle(searchTitleValue, page),
      agent.Items.byTitle(searchTitleValue)
    );
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            type="search"
            placeholder="What is that you truly desire?"
            results="0"
            className="item-search"
            onChange={handleChange}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
