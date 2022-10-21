import React, { Component } from 'react';
import TeaList from './TeaList';
import NewTeaForm from './NewTeaForm';
import TeaDetail from './TeaDetail';
import EditTeaForm from './EditTeaForm';

export class TeaControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formIsVisible: false,
      teaList: [],
      selectedTea: null,
      isEditingFormVisible: false
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

  handleEditClick = () => {
    this.setState({isEditingFormVisible: true})
  }
  
  handleEditTea = (editedTea) => {
    const editedTeaList = this.state.teaList
    .filter(tea => tea.id !== this.state.selectedTea.id)
    .concat(editedTea);
    this.setState({
      teaList: editedTeaList,
      isEditingFormVisible: false,
      selectedTea: null
    });
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
    if(this.state.teaList > 1) {
      const selectedTea = this.state.teaList.filter(tea => tea.id === id)[0]
      selectedTea.cups++;
      const newTeaList = this.state.teaList.filter(tea => tea.id !==id).concat(selectedTea);
      this.setState({teaList:newTeaList});
    } else {
      const selectedTea = this.state.teaList.filter(tea => tea.id === id)[0]
      selectedTea.cups++;
      const newTeaListArray = [];
      const changedTeaArray = newTeaListArray.concat(selectedTea);
      this.setState({
        teaList: changedTeaArray
      });
    }
  }

  decreaseTeaCups = (id) => {
    if(this.state.teaList > 1) {
      const selectedTea = this.state.teaList.filter(tea => tea.id === id)[0]
      selectedTea.cups--;
      const newTeaList = this.state.teaList.filter(tea => tea.id !==id).concat(selectedTea);
      this.setState({teaList:newTeaList});
    } else {
      const selectedTea = this.state.teaList.filter(tea => tea.id === id)[0]
      selectedTea.cups--;
      const newTeaListArray = [];
      const changedTeaArray = newTeaListArray.concat(selectedTea);
      this.setState({
        teaList: changedTeaArray
      });
    }
  }
  // js logic
  render() {
    let currentVisibleElement = null;
    let buttonText = null;
    if (this.state.isEditingFormVisible) {
      currentVisibleElement = <EditTeaForm tea={this.state.selectedTea} onEditTea={this.handleEditTea} />
      buttonText='Return to tea list';
    } else if (this.state.selectedTea) {
      currentVisibleElement = <TeaDetail
        tea={this.state.selectedTea}
        onClickIncrease={this.increaseTeaCups}
        onClickDecrease={this.decreaseTeaCups}
        onClickDelete={this.deleteTea}
        onClickEdit={this.handleEditClick}/>
      buttonText='Return to tea list'
    } else if (this.state.formIsVisible === true) {
      currentVisibleElement = <NewTeaForm onNewTeaCreation={this.addTeaToList} />
      buttonText= 'Return to tea list';
    } else {
      currentVisibleElement = <TeaList 
        teaList={this.state.teaList} 
        onTeaClick={this.onSelectTea}/>
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