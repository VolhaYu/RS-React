import React from 'react';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import InputText from './inputText';

class Form extends React.Component {
  render() {
    return (
      <form action="#" className="form-component">
        <InputText label="Name:" />
        <InputText label="SurName:" />
        <InputDate />
        <InputFile />
        <InputSelect />
        <h3 className="h3">Scills:</h3>
        <InputCheckbox label="HTML" />
        <InputCheckbox label="CSS" />
        <InputCheckbox label="JS" />
        <InputCheckbox label="REACT" />
        <InputRadio />
        <Button />
      </form>
    );
  }
}

export default Form;
