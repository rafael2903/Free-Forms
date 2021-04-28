/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FormContainer from '../../components/Form/FormContainer';
import { Form } from '../../components/Form/Form/styles';
import FormHeader from '../../components/Form/FormHeader';

function CreateForm() {
  return (
    <FormContainer>
      <Form>
        <FormHeader />
      </Form>
    </FormContainer>
  );
}

export default CreateForm;
