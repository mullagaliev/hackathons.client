import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SkillsListStyled = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const SkillsListItem = styled.div`
  position: relative;
  opacity: ${props => (props.selected ? "0.8" : "0.5")};
  background: ${props => (props.selected ? "#3F87F5" : "#53535f")};
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
  &:after {
    content: "✔";
    display: ${props => (props.selected ? "inline-block" : "none")};
    position: absolute;
    right: 20px;
  }
`;

class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIds: props.default_selectedIds ? props.default_selectedIds : []
    };
  }

  handlerChange = id => {
    const { data, select, onChange } = this.props;
    let { selectedIds } = this.state;
    if (!select) return;
    if (selectedIds.indexOf(id) >= 0) {
      selectedIds = selectedIds.filter(value => value !== id);
      this.setState({ selectedIds }, () => onChange(selectedIds));
    } else {
      selectedIds.push(id);
      this.setState({ selectedIds }, () => onChange(selectedIds));
    }
  };

  render() {
    const { data, select, onChange } = this.props;
    const { selectedIds } = this.state;
    return (
      <SkillsListStyled {...this.props}>
        {data.length > 0
          ? data.map(skill => (
              <SkillsListItem
                key={skill.id}
                selected={selectedIds.indexOf(skill.id) >= 0}
                onClick={() => this.handlerChange(skill.id)}
              >
                <span>{skill.tag}</span>
              </SkillsListItem>
            ))
          : null}
      </SkillsListStyled>
    );
  }
}

SkillsList.propTypes = {};
SkillsList.defaultProps = {
  default_selectedIds: [],
  select: false,
  onChange: () => {},
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
