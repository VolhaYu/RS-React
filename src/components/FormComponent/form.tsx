import React, { createRef } from 'react';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import InputText from './inputText';
import { Props, PropsFormType, DataArray } from '../../types';
import CardOfData from '../cardOfData/cardOfData';

export const dataArray: DataArray[] = [
  {
    id: 0,
    nameFirst: 'Volha',
    nameLast: 'Yurc',
    birthday: '17.01.1993',
    avatar: 'file.pdf',
    select: 'Minsk',
    html: 'HTML',
    css: 'CSS',
    js: 'JS',
    react: 'REACT',
  },
];
type State = {
  isValide: boolean;
};

class Form extends React.Component<Props, { isValide: boolean }> {
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

  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     isValide: false,
  //   };
  // }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
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
    dataArray.push(dataList);
    console.log(dataArray, dataList);
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
