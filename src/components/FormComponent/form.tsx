import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import Button from './button';
import './form.css';
import InputCheckbox from './inputCheckbox';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputRadio from './inputRadio';
import InputSelect from './inputSelect';
import { DataList, IFormValues } from '../../types';
import CardsData from './cardOfData/cardsData';
import Message from './cardOfData/Message';
import InputText from './inputText';
import { addCard } from '../../redux/store/reducers/reducers';

function Form() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IFormValues>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const [isHidden, setHidden] = useState(false);

  const hiddenMessage = () => {
    setTimeout(() => {
      setHidden(false);
    }, 2000);
  };

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setHidden(true);
    const dataList: DataList = {
      nameFirst: data['First Name'],
      nameLast: data['Last Name'],
      birthday: data['Birthday date'],
      avatar: URL.createObjectURL(data.Avatar[0] as unknown as Blob | MediaSource),
      select: data.City,
      scills: Array.from(data.scills).join(' '),
    };
    if (dataList) {
      dispatch(addCard(dataList));
    }
    hiddenMessage();
  };

  let message: React.ReactNode = <Message />;

  if (!isHidden) {
    message = null;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-component">
        <InputText label="First Name" register={register} errors={errors} required />
        {errors?.['First Name'] && (
          <div className="error-form">{errors['First Name']?.message}</div>
        )}
        <InputText label="Last Name" register={register} errors={errors} required />
        {errors?.['Last Name'] && <div className="error-form">{errors['Last Name']?.message}</div>}
        <InputDate label="Birthday date" register={register} errors={errors} required />
        <InputFile label="Avatar" register={register} errors={errors} required />
        <InputSelect label="City" register={register} errors={errors} required />
        <h3 className="h3">Scills:</h3>
        <InputCheckbox label="HTML" register={register} errors={errors} required />
        <InputCheckbox label="CSS" register={register} errors={errors} required />
        <InputCheckbox label="JS" register={register} errors={errors} required />
        <InputCheckbox label="REACT" register={register} errors={errors} required />
        {errors?.scills && <div className="error-form">{errors.scills.message}</div>}
        <InputRadio label="radio" register={register} errors={errors} required />
        <Button />
      </form>
      <CardsData />
      {message}
    </>
  );
}

export default Form;
