import QuestionStyles from '../../FormComponents/Question';
import Option from '../Option';
import Title from '../../FormComponents/Title';

// EU05
function Question({ form, setForm, question, questionId }) {
  return (
    <QuestionStyles>
      <Title size="sm" value={question.title} disabled />

      {question.type !== 'text' ? (
        question.options.map((option, index) => (
          <Option
            value={option.value}
            type={question.type}
            form={form}
            setForm={setForm}
            questionTitle={question.title}
            questionId={questionId}
            optionId={index}
            checked={option.checked}
          />
        ))
      ) : (
        <Option
          value="Digite sua resposta"
          type={question.type}
          form={form}
          setForm={setForm}
          questionTitle={question.title}
          questionId={questionId}
        />
      )}
    </QuestionStyles>
  );
}
export default Question;
