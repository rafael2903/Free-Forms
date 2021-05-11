import { GoSearch } from 'react-icons/go';
import { Container } from './styles';

function Search({ searchIn, setFiltered }) {
  function handleChange(e) {
    const newValues = searchIn.filter((form) =>
      form.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(newValues);
  }
  return (
    <Container>
      <input type="text" placeholder="Pesquise por um formulário" onChange={handleChange} />
      <GoSearch />
    </Container>
  );
}

export default Search;
