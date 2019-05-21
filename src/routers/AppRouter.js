import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboard from "../components/Dashboard";
import AddExpensePage from "../components/CreateExpense";
import EditExpensePage from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/PageNotFound";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboard} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;