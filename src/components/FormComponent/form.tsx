import React, { createRef } from 'react';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import InputText from './inputText';
import { Props, State } from '../../types';
import CardsData, { dataArray } from '../cardOfData/cardsData';
import Message from '../cardOfData/Message';

class Form extends React.Component<Props, State> {
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

  private form = createRef<HTMLFormElement>();

  constructor(props: Props) {
    super(props);
    this.handleValidate = this.handleValidate.bind(this);
    this.hiddenMessage = this.hiddenMessage.bind(this);
    this.state = {
      isValidate: false,
      isHidden: false,
    };
  }

  handleValidate() {
    this.setState({ isValidate: true, isHidden: true });
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const dataList = {
      nameFirst: this.inputName.current!.hendleInput(),
      nameLast: this.inputSurName.current!.hendleInput(),
      birthday: this.inputDate.current!.hendleInput(),
      avatar: this.inputFile.current!.hendleInput() as string,
      select: this.inputSelect.current!.hendleInput(),
      html: this.inputCheckbox1.current!.hendleInput() ? 'HTML' : '',
      css: this.inputCheckbox2.current!.hendleInput() ? 'CSS' : '',
      js: this.inputCheckbox3.current!.hendleInput() ? 'JS' : '',
      react: this.inputCheckbox4.current!.hendleInput() ? 'REACT' : '',
      radio: this.inputRadio.current!.hendleInput(),
    };
    if (dataList) {
      dataArray.push(dataList);
    }
    this.handleValidate();
    this.hiddenMessage();
    this.form.current!.reset();
  };

  hiddenMessage() {
    setTimeout(() => {
      this.setState({ isHidden: false });
    }, 2000);
  }

  render() {
    const { isValidate, isHidden } = this.state;
    let card: React.ReactNode;
    let message: React.ReactNode;
    if (isValidate) {
      card = <CardsData />;
      message = <Message />;
    }
    if (!isHidden) {
      message = null;
    }
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-component" ref={this.form}>
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
        {card}
        {message}
      </>
    );
  }
}

export default Form;
