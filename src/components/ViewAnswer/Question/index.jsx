import QuestionStyles from '../../FormComponents/Question';
import Option from '../Option';
import Title from '../../FormComponents/Title';

function Question({ question }) {
  return (
    <QuestionStyles>
      <Title size="sm" value={question.title} disabled />

      {question.type !== 'text' ? (
        question.options.map((option) => (
          <Option
            value={option.value}
            type={question.type}
            questionTitle={question.title}
            isChecked={option.checked}
          />
        ))
      ) : (
        <Option value={question.value} type={question.type} questionTitle={question.title} />
      )}
    </QuestionStyles>
  );
}
export default Question;
