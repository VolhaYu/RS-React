import React from 'react';
import CardsData from '../components/cardOfData/cardsData';
import Form from '../components/FormComponent/form';

function FormsPage() {
  return (
    <main>
      <h1 className="center">Form Pages</h1>
      <Form />
      <CardsData />
    </main>
  );
}

export default FormsPage;
