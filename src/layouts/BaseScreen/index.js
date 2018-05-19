import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LeftMenuContent from "../../components/LeftMenu";
// import Logout from '../../components/Logout';
import Container from "../../components/commons/Container";
import Footer from "./Footer";

import Nav from "./Nav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
  background-color: #ffffff;
`;

const Header = styled.header`
  height: 50px;
  background: #3f87f5;
  .Header__title {
    font-family: "AvenirNextCyr-Regular", sans-serif;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    letter-spacing: 0.06px;
    text-align: center;
  }
  padding: 15px;
`;

const ContentContainer = styled.section`
  flex: 0 1 auto;
  height: 100vh;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
`;

const LeftMenu = styled.section`
  display: ${props => (props.visible ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #3f87f5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;

const Content = styled.section`
  max-height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ContentInside = styled.div`
  padding: 0 1em;
  overflow: auto;
`;

class BaseScreen extends Component {
  state = {
    menuVisible: false
  };

  render() {
    const { nav, actionEdit, actionProfile, actionDone, title } = this.props;
    return (
      <Wrapper style={this.props.style}>
        {nav && (
          <Header>
            <Nav
              onToggleMenu={() => {
                this.setState({ menuVisible: !this.state.menuVisible });
              }}
              title={title}
              actionEdit={actionEdit}
              actionProfile={actionProfile}
              actionDone={actionDone}
            />
          </Header>
        )}
        <ContentContainer>
          <LeftMenu visible={this.state.menuVisible}>
            <Container style={{ padding: "5px" }}>
              <LeftMenuContent />
            </Container>
          </LeftMenu>
          <Content>
            <ContentInside>{this.props.children}</ContentInside>
          </Content>
        </ContentContainer>
        {nav && <Footer />}
      </Wrapper>
    );
  }
}

BaseScreen.propTypes = {};
BaseScreen.defaultProps = {
  nav: true,
  title: "Default title",
  actionEdit: false,
  actionProfile: false,
  actionDone: false
};

export default BaseScreen;
