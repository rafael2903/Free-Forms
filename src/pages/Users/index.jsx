import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TitleVerForms from '../../components/TitleVerForms';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';
import ContainerVerForms from '../../components/ContainerVerForms';
import StatusMessage from '../../components/StatusMessage';
import Snackbar from '../../components/Snackbar';
import Alert from '../../components/Alert';
import SearchUsers from '../../components/SearchUsers';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionsError, setActionsError] = useState('');
  const [actionsSuccess, setActionsSuccess] = useState('');

  useEffect(() => {
    api
      .get(`/users`)
      .then((res) => res.data)
      .then((data) => {
        const jsonUser = data;
        setUsers(jsonUser);
        setFilteredUsers(jsonUser);
        setLoading(false);
        console.log(data);
      })
      .catch(() => {
        setError('Não foi possível carregar os usuários');
        setLoading(false);
      });
  }, []);

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (error) return <StatusMessage error>{error}</StatusMessage>;
    if (users.length === 0) return <StatusMessage>Nao existe nenhum usuario</StatusMessage>;
    return <StatusMessage>Usuário não encontrado</StatusMessage>;
  }

  return (
    <>
      <ContainerVerForms>
        <div className="ContainerForms">
          <TitleVerForms>Usuários</TitleVerForms>
        </div>
        <SearchUsers searchIn={users} setFiltered={setFilteredUsers} />
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
