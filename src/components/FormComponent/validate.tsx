/* eslint-disable react/no-unused-state */
import React from 'react';
import { State, Props } from '../../types';
import { dataArray } from '../cardOfData/cardsData';

export const dataValue: State = {};

class Validate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const data = dataArray[dataArray.length - 1];
    if (data.nameFirst!.length > 0) {
      if (data.nameFirst!.length >= 3 && data.nameFirst![0] === data.nameFirst![0].toUpperCase()) {
        this.setState({ nameError: '' });
        delete dataValue.nameError;
      } else {
        this.setState({
          nameError: 'Must be at least 3 characters and start with a capital letter!',
        });
        dataValue.nameError = 'Must be at least 3 characters and start with a capital letter!';
      }
    } else {
      this.setState({
        nameError: 'Must be at least 3 characters and start with a capital letter!',
      });
      dataValue.nameError = 'Must be at least 3 characters and start with a capital letter!';
    }
    if (data.nameLast!.length > 0) {
      if (data.nameLast!.length >= 3 && data.nameLast![0] === data.nameLast![0].toUpperCase()) {
        this.setState({ surNameError: '' });
        delete dataValue.surNameError;
      } else {
        this.setState({
          surNameError: 'Must be at least 3 characters and start with a capital letter!',
        });
        dataValue.surNameError = 'Must be at least 3 characters and start with a capital letter!';
      }
    } else {
      this.setState({
        surNameError: 'Must be at least 3 characters and start with a capital letter!',
      });
      dataValue.surNameError = 'Must be at least 3 characters and start with a capital letter!';
    }
    if (data.birthday!.length === 8) {
      this.setState({ birthError: '' });
    } else {
      this.setState({ birthError: 'Enter full date!' });
    }
    if (data.select!.length > 0) {
      this.setState({ selectError: '' });
    } else {
      this.setState({ selectError: 'Choose city!' });
    }
    if (
      data.html!.length === 0 &&
      data.css!.length === 0 &&
      data.js!.length === 0 &&
      data.react!.length === 0
    ) {
      this.setState({ checkboxError: 'Choose at least one option!' });
    } else {
      this.setState({ checkboxError: '' });
    }
    if (data.radio! === true) {
      this.setState({ radioError: '' });
    } else {
      this.setState({ radioError: 'We must agree!' });
    }
    console.log(dataValue, Object.keys(dataValue).length !== 0);
  }
}

export default Validate;
