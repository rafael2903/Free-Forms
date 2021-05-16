import { useState } from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import api from '../../services/api';
import Alert from '../Alert';
import Snackbar from '../Snackbar';
import { Container } from './styles';

function FormNav({ match, formId }) {
  const [error, setError] = useState('');

  function downloadAnswers() {
    api
      .get(`download_answers/${formId}`, { responseType: 'blob' })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'respostas.csv');
        document.body.appendChild(link);
        link.click();
      })
      .catch(() => setError('Não foi possível baixar as respostas'));
  }

  return (
    <>
      <Container>
        <HiOutlineDocumentDownload title="baixar respostas" onClick={downloadAnswers} />
        <NavLink exact activeClassName="active" to={`${match.url}/summary`}>
          Resumo
        </NavLink>
        <NavLink exact activeClassName="active" to={`${match.url}/individual`}>
          Individual
        </NavLink>
      </Container>
      {error && (
        <Snackbar setActions={setError} autoHideDuration={2500}>
          <Alert error>{error}</Alert>
        </Snackbar>
      )}
    </>
  );
}

export default FormNav;
