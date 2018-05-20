import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillsList from "./index";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions } from "react-redux-form";

const SelectSkillsListStyled = styled.div`
  margin-top: 30px;
  h2 {
    font-family: "AvenirNextCyr-Light", sans-serif;
    font-size: 18px;
    color: #3f87f5;
    letter-spacing: 0.06px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

class SelectSkillsList extends Component {
  state = {
    selectedIds: [3, 4]
  };

  handlerChange = selectedIds => {
    const { dispatch } = this.props;
    this.setState({ selectedIds });
    dispatch(
      actions.change(
        "settings.skills",
        selectedIds.map(skill => {
          return { id: skill };
        })
      )
    );
  };

  render() {
    const { data } = this.props;
    const { selectedIds } = this.state;
    return (
      <SelectSkillsListStyled>
        <h2>Choose up to 5 skills:</h2>
        <SkillsList
          style={{ marginBottom: "20px" }}
          data={data}
          select
          default_selectedIds={selectedIds}
          onChange={this.handlerChange}
          {...this.props}
        />
        <button
          disabled={selectedIds.length === 0}
          className="c-buttons c-buttons--primary"
        >
          Done!
        </button>
      </SelectSkillsListStyled>
    );
  }
}

SelectSkillsList.propTypes = {};
SelectSkillsList.defaultProps = {
  data: [
    {
      id: 1,
      tag: "Backend"
    },
    {
      id: 2,
      tag: "Frontend"
    },
    {
      id: 3,
      tag: "Design"
    },
    {
      id: 4,
      tag: "Blockchain"
    }
  ]
};

export default connect(s => s)(SelectSkillsList);
