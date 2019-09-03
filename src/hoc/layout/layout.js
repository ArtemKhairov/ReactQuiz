import React, { Component } from "react";
import "./layout.css";
import MenuToogle from "../../components/Navigation/Navigation/MenuToogle/MenuToogle";
import Drawer from "../../components/Navigation/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    menu: false
  };
  toogleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };
  menuCloseHandler = () => {
    this.setState({
      menu: false
    });
  };
  render() {
    return (
      <div className="Layout">
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />
        <MenuToogle
          onToogle={this.toogleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
}
export default connect(mapStateToProps)(Layout);
