import { GoSearch } from 'react-icons/go';
import { Container } from './styles';

function Search({ searchIn, setFiltered, user }) {
  const compareBy = user ? 'email' : 'title';
  const placeholder = user ? 'Pesquise por um usuário' : 'Pesquise por um formulário';

  function handleChange(e) {
    const newValues = searchIn.filter((item) =>
      item[compareBy].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(newValues);
  }
  return (
    <Container>
      <input type="text" placeholder={placeholder} onChange={handleChange} />
      <GoSearch />
    </Container>
  );
}

export default Search;
