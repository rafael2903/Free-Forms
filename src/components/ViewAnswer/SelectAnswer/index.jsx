import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';

function SelectAnswer({ email, currentAnswer, totalAnswers, leftButtonClick, rightButtonClick }) {
  return (
    <Container>
      <p>{email}</p>
      <div>
        <p>
          <MdKeyboardArrowLeft size={30} onClick={leftButtonClick} />
          {currentAnswer} de {totalAnswers}
          <MdKeyboardArrowRight size={30} onClick={rightButtonClick} />
        </p>
      </div>
    </Container>
  );
}

export default SelectAnswer;
