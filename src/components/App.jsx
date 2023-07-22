import React, { Component } from "react";
import user from '../data/user.json'
import statistics from '../data/statistics.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Button, ButtonMenu } from "./App.styled";


export class App extends Component {
  state = {
    activeComponent: "Profile",
  };

  handleButtonClick = (component) => {
    this.setState({ activeComponent: component });
  };

  renderComponent = () => {
    const { activeComponent } = this.state;

    switch (activeComponent) {
      case "Profile":
        return <Profile user={user} />;
      case "Statistics":
        return <Statistics title="Upload stats" statistics={statistics} />;
      case "FriendList":
        return <FriendList friends={friends} />;
      case "TransactionHistory":
        return <TransactionHistory transactions={transactions} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <ButtonMenu>
          <Button onClick={() => this.handleButtonClick("Profile")}>Profile</Button>
          <Button onClick={() => this.handleButtonClick("Statistics")}>Statistics</Button>
          <Button onClick={() => this.handleButtonClick("FriendList")}>Friend List</Button>
          <Button onClick={() => this.handleButtonClick("TransactionHistory")}>Transaction History</Button>
        </ButtonMenu>
        <div className="content">
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}