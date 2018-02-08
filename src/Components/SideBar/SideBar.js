import React, { Component } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom'


 class SideBar extends Component {


  render() {
    return (
      <div className="navRow">
        <div className="column1">
          <h1 className="h1dot">.....</h1>
          <h1>Dear Diary</h1>
          <h5>What's Your Secret?</h5>

        <div className="navbtns">
          <Link to={'/entryform'}> <button className="navBtn">Add A New Entry</button></Link><br />
          <Link to={'/'}> <button className="homeBtn" >Homepage</button></Link>
        </div>

          <h3 className="entries">Previous Entries:</h3>
        </div>
        <div className="siteContainer" id="SideBar" >{this.props.children}</div>
      </div>
    );
  }
}

export default SideBar;
