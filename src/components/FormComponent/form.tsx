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
import CardsData, { dataArray } from './cardOfData/cardsData';
import Message from './cardOfData/Message';

const dataValue: State = {};

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
    this.checkValid = this.checkValid.bind(this);
    this.state = {
      isValidate: false,
      isHidden: false,
      nameError: '',
      surNameError: '',
      birthError: '',
      fileError: '',
      selectError: '',
      checkboxError: '',
      radioError: '',
    };
  }

  handleValidate() {
    if (Object.keys(dataValue).length === 0) {
      const dataList = {
        nameFirst: this.inputName.current!.hendleInput(),
        nameLast: this.inputSurName.current!.hendleInput(),
        birthday: this.inputDate.current!.hendleInput(),
        avatar: this.inputFile.current!.hendleInput(),
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
      this.setState({ isValidate: true, isHidden: true });
      this.form.current!.reset();
    }
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    this.checkValid();
    this.handleValidate();
    this.hiddenMessage();
  };

  checkValid() {
    const nameFirst = this.inputName.current!.hendleInput();
    const nameLast = this.inputSurName.current!.hendleInput();
    const birthday = this.inputDate.current!.hendleInput();
    const avatar = this.inputFile.current!.hendleInput();
    const select = this.inputSelect.current!.hendleInput();
    const html = this.inputCheckbox1.current!.hendleInput();
    const css = this.inputCheckbox2.current!.hendleInput();
    const js = this.inputCheckbox3.current!.hendleInput();
    const react = this.inputCheckbox4.current!.hendleInput();
    const radio = this.inputRadio.current!.hendleInput();

    if (nameFirst!.length > 0) {
      if (nameFirst!.length >= 3 && nameFirst![0] === nameFirst![0].toUpperCase()) {
        this.setState({ nameError: '' });
        delete dataValue.nameError;
      } else {
        this.setState({
          nameError: 'Must be at least 3 characters and start with a capital letter!',
        });
        dataValue.nameError = 'Error!';
      }
    } else {
      this.setState({
        nameError: 'Must be at least 3 characters and start with a capital letter!',
      });
      dataValue.nameError = 'Error!';
    }

    if (nameLast!.length > 0) {
      if (nameLast!.length >= 3 && nameLast![0] === nameLast![0].toUpperCase()) {
        this.setState({ surNameError: '' });
        delete dataValue.surNameError;
      } else {
        this.setState({
          surNameError: 'Must be at least 3 characters and start with a capital letter!',
        });
        dataValue.surNameError = 'Error!';
      }
    } else {
      this.setState({
        surNameError: 'Must be at least 3 characters and start with a capital letter!',
      });
      dataValue.surNameError = 'Error!';
    }

    if (birthday!.length === 10) {
      this.setState({ birthError: '' });
      delete dataValue.birthError;
    } else {
      this.setState({ birthError: 'Enter full date!' });
      dataValue.birthError = 'Error!';
    }

    if (!avatar?.length) {
      this.setState({ fileError: 'Choose File!' });
      dataValue.fileError = 'Error!';
    } else {
      this.setState({ fileError: '' });
      delete dataValue.fileError;
    }

    if (select!.length > 0) {
      this.setState({ selectError: '' });
      delete dataValue.selectError;
    } else {
      this.setState({ selectError: 'Choose city!' });
      dataValue.selectError = 'Error!';
    }

    if (!html && !css && !js && !react) {
      this.setState({ checkboxError: 'Choose at least one option!' });
      dataValue.checkboxError = 'Error!';
    } else {
      this.setState({ checkboxError: '' });
      delete dataValue.checkboxError;
    }

    if (!radio) {
      this.setState({ radioError: 'We must agree!' });
      dataValue.radioError = 'Error!';
    } else {
      this.setState({ radioError: '' });
      delete dataValue.radioError;
    }
  }

  hiddenMessage() {
    setTimeout(() => {
      this.setState({ isHidden: false });
    }, 2000);
  }

  render() {
    const {
      isValidate,
      isHidden,
      nameError,
      surNameError,
      birthError,
      fileError,
      selectError,
      checkboxError,
      radioError,
    } = this.state;

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
          <InputText label="Name:" name="inputName" error={nameError} ref={this.inputName} />
          <InputText
            label="SurName:"
            name="inputSurName"
            error={surNameError}
            ref={this.inputSurName}
          />
          <InputDate error={birthError} ref={this.inputDate} />
          <InputFile ref={this.inputFile} error={fileError} />
          <InputSelect error={selectError} ref={this.inputSelect} />
          <h3 className="h3">Scills:</h3>
          <InputCheckbox label="HTML" ref={this.inputCheckbox1} />
          <InputCheckbox label="CSS" ref={this.inputCheckbox2} />
          <InputCheckbox label="JS" ref={this.inputCheckbox3} />
          <InputCheckbox label="REACT" ref={this.inputCheckbox4} />
          <div style={{ color: 'red' }}>{checkboxError}</div>
          <InputRadio error={radioError} ref={this.inputRadio} />
          <Button />
        </form>
        {card}
        {message}
      </>
    );
  }
}

export default Form;
