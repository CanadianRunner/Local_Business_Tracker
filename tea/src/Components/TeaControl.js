import React, { Component } from 'react';
import TeaList from './TeaList';
import NewTeaForm from './NewTeaForm';
import TeaDetail from './TeaDetail';

export class TeaControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formIsVisible: false,
      teaList: [],
      selectedTea: null
    };
  }

  handleChangeViewClick = () => {
    if (this.state.selectedTea) {
      this.setState({
        formIsVisible: false,
        selectedTea: null
      });
    } else {
      this.setState(prevState => ({
        formIsVisible: !prevState.formIsVisible
      }));
    }
  }

  addTeaToList = (newTea) => {
    const newTeaList = this.state.teaList.concat(newTea);
    this.setState({
      teaList: newTeaList
    });
  }

  onSelectTea = (id) => {
    const newSelectedTea = this.state.teaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: newSelectedTea});
  }

  increaseTeaCups = (id) => {
    
  }

  decreaseTeaCups = (id) => {
    
  }
  // js logic
  render() {
    let currentVisibleElement = null;
    let buttonText = null;

    if (this.state.selectedTea) {
      currentVisibleElement = <TeaDetail
        tea={this.state.selectedTea}
        onClickIncrease={this.increaseTeaCups}
        onClickDecrease={this.decreaseTeaCups}
        onClickDelete={this.deleteTea} />
    } else if (this.state.formIsVisible === true) {
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