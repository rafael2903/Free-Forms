import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';

// [EU11] [EU10]
function SelectAnswer({ index, formAnswers, setIndex }) {
  const email = formAnswers[index].user_email;

  let [date, time] = formAnswers[index].created_at.split('T');
  date = date.split('-').reverse().join('/');
  [time] = time.split('.');

  function nextAnswer() {
    if (index !== formAnswers.length - 1) setIndex((idx) => idx + 1);
  }

  function previousAnswer() {
    if (index !== 0) setIndex((idx) => idx - 1);
  }
  return (
    <Container>
      <p>{email || 'Usuário anônimo'}</p>
      <p>{`${date}  ${time}`}</p>
      <div>
        <MdKeyboardArrowLeft onClick={previousAnswer} />
        <p>{`${index + 1} de ${formAnswers.length}`}</p>
        <MdKeyboardArrowRight onClick={nextAnswer} />
      </div>
    </Container>
  );
}

export default SelectAnswer;
