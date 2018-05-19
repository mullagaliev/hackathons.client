import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SkillsListStyled = styled.div`
  width: 100%;
  margin-bottom: 40px;
  .SkillsList__item {
    opacity: 0.5;
    background: #53535f;
    border-radius: 100px;
    height: 40px;
    width: 100%;
    padding: 10px 40px;
    font-family: .AppleSystemUIFont, sans-serif;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0.05px;
    text-align: center;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

class SkillsList extends Component {
  render() {
    const { data } = this.props;
    return (
      <SkillsListStyled {...this.props}>
        {data.length > 0
          ? data.map(skill => (
              <div className="SkillsList__item" key={skill.id}>
                <span>{skill.tag}</span>
              </div>
            ))
          : null}
      </SkillsListStyled>
    );
  }
}

SkillsList.propTypes = {};
SkillsList.defaultProps = {
  data: [
    {
      id: 1,
      tag: "Backend",
      strength: 27,
      varified: 3
    },
    {
      id: 17,
      tag: "Product-manager",
      strength: 75,
      countVerified: 8
    }
  ]
};

export default SkillsList;
