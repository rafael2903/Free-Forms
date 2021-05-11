import { CgClose } from 'react-icons/cg';
import { MdContentCopy } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { StyledModal, Input } from './styles';
import { encode } from '../../services/id';
import Button from '../Button';
import api from '../../services/api';
import Snackbar from '../Snackbar';
import Alert from '../Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

// EU17 EU03
function ShareModal({ show, setShow, formId }) {
  const { href } = window.location;
  const link = `${href}form/view/${encode(formId)}`;

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [respondents, setRespondents] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    api
      .get(`/respondents/${formId}`)
      .then((res) => res.data)
      .then((data) => {
        setRespondents([...data]);
      });
    setEmail('');
  }, [refreshKey, formId]);

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post('/find_id', { email })
      .then((res) => res.data.id)
      .then((userId) => {
        api
          .post('/user_has_forms', { user_id: userId, form_id: formId })
          .then(() => {
            setSuccess('Formulário compartilhado com sucesso');
            setRefreshKey((oldKey) => oldKey + 1);
          })
          .catch(() => setError('Não foi possível compartilhar o formulário'));
      })
      .catch(() => setError('Usuário não encontrado'));
  }

  return (
    <StyledModal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header>
        <Modal.Title>Compartilhar</Modal.Title>
        <CgClose
          size={20}
          color="#666"
          onClick={() => setShow(false)}
          style={{ cursor: 'pointer' }}
        />
      </Modal.Header>
      <Modal.Body>
        <h2>Compartilhar por link</h2>
        <div className="form-link">
          <Input type="text" value={link} onFocus={(e) => e.target.select()} readOnly />
          <MdContentCopy
            title="Copiar link"
            className="copy-link"
            onClick={() => {
              navigator.clipboard.writeText(link);
              setSuccess('Link copiado para a área de transferência');
            }}
          />
        </div>
        <h2>Compartilhar por email</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Compartilhar</Button>
        </form>
        <div className="respondents">
          <h2>Compartilhado com:</h2>
          <div>
            {respondents.map((respondent) => (
              <p>{respondent.user.email}</p>
            ))}
          </div>
        </div>
      </Modal.Body>

      {error && (
        <Snackbar setActions={setError} autoHideDuration={2500}>
          <Alert error>{error}</Alert>
        </Snackbar>
      )}

      {success && (
        <Snackbar setActions={setSuccess} autoHideDuration={2500}>
          <Alert>{success}</Alert>
        </Snackbar>
      )}
    </StyledModal>
  );
}
export default ShareModal;
