import React, {Component} from 'react';
import './EntryForm.css';
// import './animate.css';
// import SideBar from '../SideBar/SideBar';


class EntryForm extends Component {
    constructor (props) {
        super(props);
    }

    render() {
      return(
        <div className="formWrapper">
          <h1>
            
            {this.props.fuck}
          </h1>
        
          <h1 className="dotty">.....</h1>
          <h1 className="dotty">.....</h1>
          <textarea className="entryInput" value={this.props.newEntry} onChange={this.props.handleUserInput} placeholder="New Entry"/><br />
          <button  className="addBtn" onClick={this.props.writeEntry}>Add</button>
        </div>
      )
    }
  }

export default EntryForm;
