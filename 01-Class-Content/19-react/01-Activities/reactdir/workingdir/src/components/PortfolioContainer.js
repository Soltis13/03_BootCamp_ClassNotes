import React, { Component } from "react";
import NavTabs from "./NavTabs";

import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import API from "../Util/API";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  loadedPage = (page) => {
    if(page==="About"){
      return <About />
    }else if(page==="Discover"){
      return <Discover />
    } else if (page === "Search"){
      return <Search />
    }

  };  

  
  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchDogs("");
  }

  searchDogs = () => {
    API.search()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.loadedPage(this.state.currentPage)}
      </div>
    );
  }
}

export default PortfolioContainer;
