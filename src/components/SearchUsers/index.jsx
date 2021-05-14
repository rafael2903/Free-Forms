import { GoSearch } from 'react-icons/go';
import { Container } from './styles';

function SearchUsers({ searchIn, setFiltered }) {
  function handleChange(e) {
    const newValues = searchIn.filter((user) =>
      user.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(newValues);
  }
  return (
    <Container>
      <input type="text" placeholder="Pesquise por um usuário" onChange={handleChange} />
      <GoSearch />
    </Container>
  );
}

export default SearchUsers;
