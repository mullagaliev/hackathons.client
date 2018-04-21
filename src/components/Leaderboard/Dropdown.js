import React, { Component } from 'react';

class Dropdown extends Component {

  state = {
    selectedValue : 'Total wins',
    isDropdownVisible: false,
    unSelectedValue: 'XP'
  }

  dropdown = React.createRef();


  setSelectedValue = (e, value) => {
    e.preventDefault();

    this.setState((prevState) => ({
      selectedValue: value,
      unSelectedValue: prevState.selectedValue
    }), () => {
      this.toggleDropdown();
    });
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownVisible: !prevState.isDropdownVisible
    }));
  }

  render() {
    const { selectedValue, isDropdownVisible, unSelectedValue } = this.state;

    const height = isDropdownVisible ? this.dropdown.current.clientHeight+'px' : 0;
    return (
      <div className="dropdown">
        <p className="dropdown-selected" onClick={this.toggleDropdown}>{selectedValue} <span className="fas fa-caret-down dropdown-icon"></span></p>
        <div className="dropdown-content" style={{height}}>
          <ul ref={this.dropdown} className="dropdown-list">
            <li className="dropdown-item" onClick={(e) => this.setSelectedValue(e, unSelectedValue)}>{unSelectedValue}</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Dropdown;
