import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../components/commons/Container";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <div className="footer-center">
            <div className="footer-logos">
              <span className="fab fa-facebook footer-logos-fb" />
              <span className="fab fa-telegram-plane footer-logos-tg" />
            </div>
            <div className="footer-copyright">
              <p class="footer-copyright-c">Facepalm team ©</p>
              <p className="footer-copyright-a">All rights reserved</p>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
