import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
  //STATE BASE SPA
  //   state = { location: "home" };

  //method to determine which page gets rendered depending on the state, uses a switch statement
  //   getPage() {
  //     const { location } = this.state;

  //     switch (location) {
  //       case "home":
  //         return <HomePage />;
  //       case "category":
  //         return <CategorySelectionPage />;
  //       case "entry":
  //         return <NewEntryPage />;
  //       default:
  //         return null;
  //     }
  //   }

  //create a button that changes the state to re render the page based on the state
  //   onChangeLocation = location => {
  //     this.setState({ location });
  //   };

  // render() {
  //     return (
  //       <div>
  //         <button onClick={() => this.onChangeLocation("home")}>Home</button>
  //         <button onClick={() => this.onChangeLocation("category")}>
  //           Category
  //         </button>
  //         <button onClick={() => this.onChangeLocation("entry")}>
  //           New Entry
  //         </button>
  //         {this.getPage()}
  //       </div>
  //     );
  //   }
  // }

  //LOCATION BASED SPA

  state = {
    categories: ["food", "thoughts", "romance"],
    entries: []
  };

  onEntryFormSubmit = entry => {
    this.setState(() => {
        //create new array using spread operator as we dont mutate state
      return { entries: [...state.entries, entry] };
    });
  };

  render() {
    const { categories } = this.state;
const {onEntryFormSubmit} = this.props

    return (
      <div>
        <BrowserRouter>
          <div>
            {/* render component of homepage */}
            {/* link to make it spa */}
            {/* <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/entry">Entry</Link> */}
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/category"
              render={props => {
                return (
                  <CategorySelectionPage {...props} categories={categories} />
                );
              }}
            />
            <Route
              exact
              path="/entry/new/:index"
              render={props => {
                return <NewEntryPage {...props} categories={categories} onEntryFormSubmit />;
              }}
            />

            {/* <Route path="/category" component={CategorySelectionPage} />
            <Route path="/entry" component={NewEntryPage} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
