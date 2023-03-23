import React from 'react';
import Form, { dataListCard } from '../components/FormComponent/form';
import CardOfData from '../components/cardOfData/cardOfData';

function FormsPage() {
  return (
    <main>
      <h1 className="center">Form Pages</h1>
      <Form />
      {/* <CardOfData name={dataListCard.nameFirst} surName={dataListCard.nameLast} /> */}
    </main>
  );
}

export default FormsPage;
