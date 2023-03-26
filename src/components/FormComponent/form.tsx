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
// import Validate, { dataValue } from './validate';

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
      // fileError: '',
      selectError: '',
      checkboxError: '',
      radioError: '',
    };
  }

  handleValidate() {
    // const data = dataArray[dataArray.length - 1];
    // if (data.nameFirst!.length > 0) {
    //   if (data.nameFirst!.length >= 3 && data.nameFirst![0] === data.nameFirst![0].toUpperCase()) {
    //     this.setState({ nameError: '' });
    //     delete dataValue.nameError;
    //   } else {
    //     this.setState({
    //       nameError: 'Must be at least 3 characters and start with a capital letter!',
    //     });
    //     dataValue.nameError = 'Must be at least 3 characters and start with a capital letter!';
    //   }
    // } else {
    //   this.setState({
    //     nameError: 'Must be at least 3 characters and start with a capital letter!',
    //   });
    //   dataValue.nameError = 'Must be at least 3 characters and start with a capital letter!';
    // }
    // if (data.nameLast!.length > 0) {
    //   if (data.nameLast!.length >= 3 && data.nameLast![0] === data.nameLast![0].toUpperCase()) {
    //     this.setState({ surNameError: '' });
    //     delete dataValue.surNameError;
    //   } else {
    //     this.setState({
    //       surNameError: 'Must be at least 3 characters and start with a capital letter!',
    //     });
    //     dataValue.surNameError = 'Must be at least 3 characters and start with a capital letter!';
    //   }
    // } else {
    //   this.setState({
    //     surNameError: 'Must be at least 3 characters and start with a capital letter!',
    //   });
    //   dataValue.surNameError = 'Must be at least 3 characters and start with a capital letter!';
    // }
    // if (data.birthday!.length === 8) {
    //   this.setState({ birthError: '' });
    // } else {
    //   this.setState({ birthError: 'Enter full date!' });
    // }
    // if (data.select!.length > 0) {
    //   this.setState({ selectError: '' });
    // } else {
    //   this.setState({ selectError: 'Choose city!' });
    // }
    // if (
    //   data.html!.length === 0 &&
    //   data.css!.length === 0 &&
    //   data.js!.length === 0 &&
    //   data.react!.length === 0
    // ) {
    //   this.setState({ checkboxError: 'Choose at least one option!' });
    // } else {
    //   this.setState({ checkboxError: '' });
    // }
    // if (data.radio! === true) {
    //   this.setState({ radioError: '' });
    // } else {
    //   this.setState({ radioError: 'We must agree!' });
    // }
    console.log(dataValue);
    if (Object.keys(dataValue).length === 0) {
      this.setState({ isValidate: true, isHidden: true });
    }
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
    console.log(dataArray, dataValue);
    // this.checkValid();
    this.handleValidate();
    this.hiddenMessage();
    this.form.current!.reset();
  };

  checkValid() {
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
          <InputFile ref={this.inputFile} />
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
