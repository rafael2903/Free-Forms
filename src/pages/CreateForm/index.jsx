/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Form } from '../../components/Form/Form/styles';
import FormHeader from '../../components/Form/FormHeader';
import Main from '../../components/Main';

function CreateForm() {
  return (
    <Main>
      <Form>
        <FormHeader />
      </Form>
    </Main>
  );
}

export default CreateForm;
