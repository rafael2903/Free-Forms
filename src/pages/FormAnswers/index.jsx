import { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import FormNav from '../../components/FormNav';
import StatusMessage from '../../components/StatusMessage';
import api from '../../services/api';
import { decode } from '../../services/id';
import Responses from '../Responses';
import Summary from '../Summary';
// [EU11]
function FormAnswers({ match }) {
  const [formAnswers, setFormAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let { id } = useParams();
  [id] = decode(id);

  useEffect(() => {
    api
      .get(`/same_form/${id}`)
      .then((res) => res.data)
      .then((data) => {
        const jsonForm = data.map((answer) => ({
          id: answer.id,
          form_id: answer.form_id,
          user_id: answer.user_id,
          user_email: answer.user_email,
          created_at: answer.created_at,
          title: JSON.parse(answer.answers).hash.title,
          answers: JSON.parse(answer.answers).hash.questions,
        }));
        setFormAnswers(jsonForm);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    return <StatusMessage error>Não foi possível carregar as respostas</StatusMessage>;
  }

  return (
    <>
      <FormNav match={match} formId={id} />

      {loading || error ? (
        statusMessage()
      ) : (
        <>
          <Route path={`${match.path}/summary`}>
            <Summary formAnswers={formAnswers} />
          </Route>

          <Route path={`${match.path}/individual`}>
            <Responses formAnswers={formAnswers} />
          </Route>
        </>
      )}
    </>
  );
}

export default FormAnswers;
