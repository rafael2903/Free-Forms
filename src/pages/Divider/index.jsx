import { useParams, Route } from 'react-router-dom';
import React from 'react';

import { decode } from '../../services/id';
import FormHeader from '../../components/FormComponents/FormHeader';
import Main from '../../components/Main';
import EditForm from '../EditForm';
import FormAnswers from '../FormAnswers';

function Divider({ match }) {
  let { id } = useParams();
  [id] = decode(id);

  return (
    <Main>
      <FormHeader match={match} />
      <Route path={`${match.path}/edit`} component={EditForm} />
      <Route path={`${match.path}/answers`} component={FormAnswers} />
    </Main>
  );
}

export default Divider;
