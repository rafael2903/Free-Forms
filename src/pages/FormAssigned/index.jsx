import { HiPlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import TitleVerForms from '../../components/TitleVerForms';
import Button from '../../components/Button';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';
import ContainerVerForms from '../../components/ContainerVerForms';
import StatusMessage from '../../components/StatusMessage';
import Snackbar from '../../components/Snackbar';
import Alert from '../../components/Alert';
import { getUserId } from '../../services/auth';
import { encode } from '../../services/id';
import Search from '../../components/Search';

// EU07
function FormAssigned() {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionsError, setActionsError] = useState('');
  const [actionsSuccess, setActionsSuccess] = useState('');

  useEffect(() => {
    api
      .get(`/assigned/${getUserId()}`)
      .then((res) => res.data)
      .then((data) => {
        const jsonForm = data.map((form) => ({
          id: form.id,
          title: JSON.parse(form.question).hash.title,
        }));
        setForms(jsonForm);
        setFilteredForms(jsonForm);
        setLoading(false);
      })
      .catch(() => {
        setError('Não foi possível carregar seus formulários');
        setLoading(false);
      });
  }, []);

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (error) return <StatusMessage error>{error}</StatusMessage>;
    if (forms.length === 0)
      return <StatusMessage>Nenhum formulário foi compartilhado com você</StatusMessage>;
    return <StatusMessage>Formulário não encontrado</StatusMessage>;
  }

  return (
    <>
      <ContainerVerForms>
        <div className="ContainerForms">
          <TitleVerForms>Compartilhados comigo</TitleVerForms>
          <div className="ButtonsContainer">
            <Button as={Link} to="/forms/create">
              <HiPlusSm size={30} />
              Criar novo formulário
            </Button>
          </div>
        </div>
        <Search searchIn={forms} setFiltered={setFilteredForms} />
        <ListForms>
          {filteredForms.length
            ? filteredForms.map((form) => (
                <FormItem key={form.id}>
                  <p>{form.title}</p>
                  <div>
                    <Link to={`/forms/${encode(form.id)}/view`} target="_blank">
                      <IoEyeOutline className="view" title="Visualizar formulário" />
                    </Link>
                    {/* EU09 */}
                  </div>
                </FormItem>
              ))
            : statusMessage()}
        </ListForms>
      </ContainerVerForms>
      {actionsError && (
        <Snackbar setActions={setActionsError} autoHideDuration={2500}>
          <Alert error>{actionsError}</Alert>
        </Snackbar>
      )}
      {actionsSuccess && (
        <Snackbar setActions={setActionsSuccess} autoHideDuration={2500}>
          <Alert>{actionsSuccess}</Alert>
        </Snackbar>
      )}
    </>
  );
}

export default FormAssigned;
