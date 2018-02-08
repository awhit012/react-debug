
import React, { Component } from 'react';
import './Entry.css';
import PropTypes from 'prop-types';

class Entry extends Component {
    constructor(props){
      super(props);
      // this.entryTitle = props.entryTitle
      this.entryContent = props.entryContent;
      this.entryId = props.entryId;
      this.handleRemoveEntry = this.handleRemoveEntry.bind(this);
    }
    handleRemoveEntry(id){
      this.props.removeEntry(id);

    }
    render(props){
        return(

          <div className="entryDisplay">

             <button className="delete" onClick={()=> this.handleRemoveEntry(this.entryId)}>Delete</button>
             <p className="entryContent">{this.entryContent}</p>
          </div>

        )
    }
}
Entry.propTypes = {
  entryContent: PropTypes.string,
}

export default Entry;
