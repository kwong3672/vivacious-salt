import React from 'react';
import ChallengerList from './ChallengerList.jsx';
import dummyData from './dummyData.js';

class AdminChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    $(e.target).next().toggleClass('hidden');
  }

  render() {
    return ( 
      <div>
        <img src={dummyData.adminChallenge.icon} alt="" />
        <h2>{dummyData.adminChallenge.name}</h2>
        <img src={dummyData.adminChallenge.imageUrl} alt="" />
        <p>{dummyData.adminChallenge.description}</p>
        <ChallengerList challengers={dummyData.adminChallenge.challengers} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default AdminChallenge;
