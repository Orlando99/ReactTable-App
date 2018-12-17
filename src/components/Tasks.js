import React from 'react';
import FullTaskTable from '../container/FullTaskTable'
import './app.css'

class Tasks extends React.Component {
  render() {
    return(
      <FullTaskTable id = {this.props.params.id} />
    );
  }
}

export default Tasks;