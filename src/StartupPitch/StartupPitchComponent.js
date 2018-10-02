import React, { Component } from 'react';
import faker from 'faker';

const getNoun = () => faker.company.bsNoun();

const getVerb = () => faker.company.bsBuzz();

const getAdjective = () => faker.company.bsAdjective();

class StartupPitch extends Component {
  render() {
    return (
      <div>
        A {getAdjective()} app to {getVerb()} {getNoun()}
      </div>
    );
  }
}

export default StartupPitch;
