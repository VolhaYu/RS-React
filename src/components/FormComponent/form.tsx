import React, { createRef } from 'react';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import InputText from './inputText';
import { Props, PropsFormType } from '../../types';
import CardOfData from '../cardOfData/cardOfData';

type Obj = {
  nameFirst?: string;
  nameLast?: string;
};

export const dataListCard: Obj = {};
class Form extends React.Component {
  private inputName = createRef<InputText>();

  private inputSurName = createRef<InputText>();

  private inputDate = createRef<InputDate>();

  private inputFile = createRef<InputFile>();

  private inputSelect = createRef<InputSelect>();

  private inputCheckbox1 = createRef<InputCheckbox>();

  private inputCheckbox2 = createRef<InputCheckbox>();

  private inputCheckbox3 = createRef<InputCheckbox>();

  private inputCheckbox4 = createRef<InputCheckbox>();

  private inputRadio = createRef<InputRadio>();

  // constructor(props: PropsFormType) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    dataListCard.nameFirst = `${this.inputName.current!.hendleInput()}`;
    dataListCard.nameLast = `${this.inputName.current!.hendleInput()}`;
    const dataList = {
      nameFirst: this.inputName.current!.hendleInput(),
      nameLast: this.inputSurName.current!.hendleInput(),
      birthday: this.inputDate.current!.hendleInput(),
      avatar: this.inputFile.current!.hendleInput(),
      select: this.inputSelect.current!.hendleInput(),
      html: this.inputCheckbox1.current!.hendleInput(),
      css: this.inputCheckbox2.current!.hendleInput(),
      js: this.inputCheckbox3.current!.hendleInput(),
      react: this.inputCheckbox4.current!.hendleInput(),
      radio: this.inputRadio.current!.hendleInput(),
    };
    console.log(dataListCard, dataList);
    // this.setState(({ count }) => ({
    //   count: count + 1,
    // }));
    return <CardOfData name={dataListCard.nameFirst} surName={dataListCard.nameLast} />;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-component">
        <InputText label="Name:" name="inputName" ref={this.inputName} />
        <InputText label="SurName:" name="inputSurName" ref={this.inputSurName} />
        <InputDate ref={this.inputDate} />
        <InputFile ref={this.inputFile} />
        <InputSelect ref={this.inputSelect} />
        <h3 className="h3">Scills:</h3>
        <InputCheckbox label="HTML" ref={this.inputCheckbox1} />
        <InputCheckbox label="CSS" ref={this.inputCheckbox2} />
        <InputCheckbox label="JS" ref={this.inputCheckbox3} />
        <InputCheckbox label="REACT" ref={this.inputCheckbox4} />
        <InputRadio ref={this.inputRadio} />
        <Button />
      </form>
    );
  }
}

export default Form;
