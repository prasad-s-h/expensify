import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3>Expensify!</h3>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        ExpenseDashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        AddExpensePage
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        EditExpensePage
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        HelpPage
      </NavLink>
    </header>
  );
};

export default Header;