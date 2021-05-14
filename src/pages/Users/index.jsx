import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';
import ContainerVerForms from '../../components/ContainerVerForms';
import StatusMessage from '../../components/StatusMessage';
import Snackbar from '../../components/Snackbar';
import Alert from '../../components/Alert';
import Search from '../../components/Search';
import ListHeader from '../../components/ListHeader';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionsError, setActionsError] = useState('');
  const [actionsSuccess, setActionsSuccess] = useState('');

  useEffect(() => {
    api
      .get('/users')
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Não foi possível carregar os usuários');
        setLoading(false);
      });
  }, []);

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (error) return <StatusMessage error>{error}</StatusMessage>;
    if (users.length === 0) return <StatusMessage>Não existem usuários</StatusMessage>;
    return <StatusMessage>Usuário não encontrado</StatusMessage>;
  }

  return (
    <>
      <ContainerVerForms>
        <ListHeader title="Usuários" />
        <Search searchIn={users} setFiltered={setFilteredUsers} user />
        <ListForms>
          {filteredUsers.length
            ? filteredUsers.map((user) => (
                <FormItem key={user.id}>
                  <p>{user.email}</p>
                  <div>
                    <RiDeleteBin6Line className="delete" title="Excluir usuário" />
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

export default Users;
