import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile, { file } from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import { IFormValues } from '../../types';
import CardsData, { dataArray } from './cardOfData/cardsData';
import Message from './cardOfData/Message';
import InputText from './inputText';

type DataList = {
  nameFirst: string;
  nameLast: string;
  birthday: string;
  avatar: string;
  select: string;
  scills: string;
};

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

  let avatarFile: string;

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setValidate(true);
    setHidden(true);
    if (file?.data !== undefined) {
      avatarFile = URL.createObjectURL(file.data);
    }
    const dataList: DataList = {
      nameFirst: data['First Name'],
      nameLast: data['Last Name'],
      birthday: data['Birthday date'],
      avatar: avatarFile,
      select: data.City as unknown as string,
      scills: Array.from(data.scills).join(' '),
    };
    if (dataList) {
      dataArray.push(dataList);
    }
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
