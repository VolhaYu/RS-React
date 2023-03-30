import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import { DataArray, Props, IFormValues, State } from '../../types';
import CardsData, { dataArray } from './cardOfData/cardsData';
import Message from './cardOfData/Message';
import InputText from './inputText';

const dataValue: State = {};

// class Form extends React.Component<Props, State> {
//   // const { register, handleSubmit, errors} = useForm();
//   private inputName = createRef<InputText>();

//   private inputSurName = createRef<InputText>();

//   private inputDate = createRef<InputDate>();

//   private inputFile = createRef<InputFile>();

//   private inputSelect = createRef<InputSelect>();

//   private inputCheckbox1 = createRef<InputCheckbox>();

//   private inputCheckbox2 = createRef<InputCheckbox>();

//   private inputCheckbox3 = createRef<InputCheckbox>();

//   private inputCheckbox4 = createRef<InputCheckbox>();

//   private inputRadio = createRef<InputRadio>();

//   private form = createRef<HTMLFormElement>();

//   constructor(props: Props) {
//     super(props);
//     this.handleValidate = this.handleValidate.bind(this);
//     this.hiddenMessage = this.hiddenMessage.bind(this);
//     this.checkValid = this.checkValid.bind(this);
//     this.state = {
//       isValidate: false,
//       isHidden: false,
//       nameError: '',
//       surNameError: '',
//       birthError: '',
//       fileError: '',
//       selectError: '',
//       checkboxError: '',
//       radioError: '',
//     };
//   }

//   handleValidate() {
//     if (Object.keys(dataValue).length === 0) {
//       const dataList = {
//         nameFirst: this.inputName.current!.hendleInput(),
//         nameLast: this.inputSurName.current!.hendleInput(),
//         birthday: this.inputDate.current!.hendleInput(),
//         avatar: this.inputFile.current!.hendleInput(),
//         select: this.inputSelect.current!.hendleInput(),
//         html: this.inputCheckbox1.current!.hendleInput() ? 'HTML' : '',
//         css: this.inputCheckbox2.current!.hendleInput() ? 'CSS' : '',
//         js: this.inputCheckbox3.current!.hendleInput() ? 'JS' : '',
//         react: this.inputCheckbox4.current!.hendleInput() ? 'REACT' : '',
//         radio: this.inputRadio.current!.hendleInput(),
//       };
//       if (dataList) {
//         dataArray.push(dataList);
//       }
//       this.setState({ isValidate: true, isHidden: true });
//       this.form.current!.reset();
//     }
//   }

//   handleSubmit: React.FormEventHandler<HTMLFormElement> = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     this.checkValid();
//     this.handleValidate();
//     this.hiddenMessage();
//   };

//   hiddenMessage() {
//     setTimeout(() => {
//       this.setState({ isHidden: false });
//     }, 2000);
//   }

//   render() {
//     const {
//       isValidate,
//       isHidden,
//       nameError,
//       surNameError,
//       birthError,
//       fileError,
//       selectError,
//       checkboxError,
//       radioError,
//     } = this.state;

//     let card: React.ReactNode;
//     let message: React.ReactNode;
//     if (isValidate) {
//       card = <CardsData />;
//       message = <Message />;
//     }
//     if (!isHidden) {
//       message = null;
//     }
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className="form-component" ref={this.form}>
//           <InputText label="Name:" name="inputName" error={nameError} ref={this.inputName} />
//           <InputText
//             label="SurName:"
//             name="inputSurName"
//             error={surNameError}
//             ref={this.inputSurName}
//           />
//           <InputDate error={birthError} ref={this.inputDate} />
//           <InputFile ref={this.inputFile} error={fileError} />
//           <InputSelect error={selectError} ref={this.inputSelect} />
//           <h3 className="h3">Scills:</h3>
//           <InputCheckbox label="HTML" ref={this.inputCheckbox1} />
//           <InputCheckbox label="CSS" ref={this.inputCheckbox2} />
//           <InputCheckbox label="JS" ref={this.inputCheckbox3} />
//           <InputCheckbox label="REACT" ref={this.inputCheckbox4} />
//           <div style={{ color: 'red' }}>{checkboxError}</div>
//           <InputRadio error={radioError} ref={this.inputRadio} />
//           <Button />
//         </form>
//         {card}
//         {message}
//       </>
//     );
//   }
// }

// type ComponentProps = {
//   register: UseFormRegister<FormInput>;
//   errors: FieldErrors<FormInput>;
// };

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const [isValidate, setValidate] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const hiddenMessage = () => {
    setTimeout(() => {
      setHidden(false);
    }, 2000);
  };

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    setValidate(true);
    setHidden(true);
    hiddenMessage();
    reset();
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="form-component">
        <InputText label="First Name" register={register} errors={errors} required />
        {errors?.['First Name'] && <div className="error">{errors['First Name']?.message}</div>}
        <InputText label="Last Name" register={register} errors={errors} required />
        {errors?.['Last Name'] && <div className="error">{errors['Last Name']?.message}</div>}
        <InputDate label="Birthday date" register={register} errors={errors} required />
        <InputFile label="Avatar" register={register} errors={errors} required />
        <InputSelect label="City" register={register} errors={errors} required />
        <h3 className="h3">Scills:</h3>
        <InputCheckbox label="HTML" register={register} errors={errors} required />
        <InputCheckbox label="CSS" register={register} errors={errors} required />
        <InputCheckbox label="JS" register={register} errors={errors} required />
        <InputCheckbox label="REACT" register={register} errors={errors} required />
        {errors?.scills && <div className="error">{errors.scills.message}</div>}
        <InputRadio label="radio" register={register} errors={errors} required />
        <Button />
      </form>
      {card}
      {message}
    </>
  );
}

export default Form;
