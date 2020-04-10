import React, { Component } from 'react';
import {
  Grommet,
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Menu, Notification, Favorite, Accessibility } from 'grommet-icons';
import theme from '../theme';
import SidebarMenu from './sidebar-menu';
import ResponsiveAppBody from './responsive-app-body';
import { OnMobile, OnAtLeastTablet, OnDesktop } from '../responsive-ui-utils';

const HeaderBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'large', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

class LandingView extends Component {
  state = {
    showSidebar: false,
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <HeaderBar background="brand">
                <OnAtLeastTablet>
                  <Heading size="small" margin="none" level="2">
                    adoptaneighbor.live
                  </Heading>
                </OnAtLeastTablet>
                <Button
                  icon={<Menu />}
                  onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                />
              </HeaderBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <ResponsiveAppBody />
                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      <SidebarMenu />
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        color="secondaryBrand"
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box fill background="light-2" align="center" justify="center">
                      <SidebarMenu />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default LandingView;
