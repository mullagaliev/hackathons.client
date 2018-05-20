import React, { Component } from "react";
import { connect } from "react-redux";

import { sortByWins, sortByXp } from "../../redux/actions";
class Dropdown extends Component {
  state = {
    selectedValue: "XP",
    isDropdownVisible: false,
    unSelectedValue: "Total wins"
  };

  dropdown = React.createRef();

  setSelectedValue = (e, value) => {
    e.preventDefault();

    this.setState(
      prevState => ({
        selectedValue: value,
        unSelectedValue: prevState.selectedValue
      }),
      () => {
        this.toggleDropdown();
        if (value === "Total wins") {
          this.props.sortByWins();
        } else if (value === "XP") {
          this.props.sortByXp();
        }
      }
    );
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownVisible: !prevState.isDropdownVisible
    }));
  };

  render() {
    const { selectedValue, isDropdownVisible, unSelectedValue } = this.state;

    const height = isDropdownVisible
      ? this.dropdown.current.clientHeight + "px"
      : 0;
    return (
      <div className="dropdown">
        <p className="dropdown-selected" onClick={this.toggleDropdown}>
          {selectedValue} <span className="fas fa-caret-down dropdown-icon" />
        </p>
        <div className="dropdown-content" style={{ height }}>
          <ul ref={this.dropdown} className="dropdown-list">
            <li
              className="dropdown-item"
              onClick={e => this.setSelectedValue(e, unSelectedValue)}
            >
              {unSelectedValue}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sort: state.sort
  };
}

export default connect(mapStateToProps, { sortByWins, sortByXp })(Dropdown);
