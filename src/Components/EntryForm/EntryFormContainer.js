import React, {Component} from 'react';
import EntryForm from './EntryForm'

// import './animate.css';
// import SideBar from '../SideBar/SideBar';


class EntryFormContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
          newEntryContent: '',
        };

        this.fuck = "fuck";
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeEntry = this.writeEntry.bind(this);

    }
    handleUserInput(e){
      e.preventDefault();
      this.setState({
        newEntryContent: e.target.value,
      })
    }
    writeEntry() {
      //calls a method that sets the entryContent
      this.addEntry(this.state.newEntryContent);
      //sets field back to empty
      this.setState ({
        newEntryContent: '',
      })
    }

    addEntry(entry){

      this.database.push().set({ entryContent: entry});
    }



    render() {
      return(
        <EntryForm handleUserInput={this.handleUserInput} 
                    writeEntry={this.writeEntry}
                    fuck={this.fuck}
                    newEntry={this.state.newEntryContent}/>
      )
    }
  }

export default EntryFormContainer;
