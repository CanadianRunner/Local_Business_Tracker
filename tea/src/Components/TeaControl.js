import React, { Component } from 'react';
import TeaList from './TeaList';

export class TeaControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teaList: []
    };
  }

  // js logic
  render() {
    return (
      <React.Fragment>
        <div className='tea-control'>
          <h1>Barrys Terrific Tea's</h1>
          <hr />
          <TeaList />
        </div>
      </React.Fragment>
    );
  }
}

export default TeaControl;