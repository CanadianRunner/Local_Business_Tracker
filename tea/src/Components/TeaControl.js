import React, { Component } from 'react';
import TeaList from './TeaList';
import NewTeaForm from './NewTeaForm';

export class TeaControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formIsVisible: false,
      teaList: []
    };
  }

  handleChangeViewClick = () => {
    return this.setState(prevState => ({
      formIsVisible: !prevState.formIsVisible
    }))
  }

  addTeaToList = (newTea) => {
    const newTeaList = this.state.teaList.concat(newTea);
    this.setState({
      teaList: newTeaList
    });
  }

  // js logic
  render() {
    let currentVisibleElement = null;
    let buttonText = null;

    if (this.state.formIsVisible === true) {
      currentVisibleElement = <NewTeaForm onNewTeaCreation={this.addTeaToList} />
      buttonText= 'Return to tea list';
    } else {
      currentVisibleElement = <TeaList 
        teaList={this.state.teaList} />
        buttonText= 'Add new Tea!';
    }
    return (
      <React.Fragment>
        <div className='tea-control'>
          <h1>Barrys Terrific Tea's</h1>
          <hr />
          {currentVisibleElement}
          <button onClick={this.handleChangeViewClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default TeaControl;