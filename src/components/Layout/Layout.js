import React, {Component} from 'react';

import Aux from '../../hoc/Aux_win';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true
    }
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  };

  render() {
    return (
      <Aux>
        <Toolbar/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  };
}

export default Layout;
