import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/" component={WelcomePage} />
      <Route path="/char" component={CharacterList} />
      <Route path="/search" component={SearchForm} />
    </main>
  );
}
