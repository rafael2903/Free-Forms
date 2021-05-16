import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';

function SelectAnswer({ email, currentAnswer, totalAnswers, leftButtonClick, rightButtonClick }) {
  return (
    <Container>
      <p>{email || 'Usuário anônimo'}</p>
      <div>
        <MdKeyboardArrowLeft onClick={leftButtonClick} />
        <p>{`${currentAnswer} de ${totalAnswers}`}</p>
        <MdKeyboardArrowRight onClick={rightButtonClick} />
      </div>
    </Container>
  );
}

export default SelectAnswer;
