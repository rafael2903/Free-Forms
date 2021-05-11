import { HiPlusSm } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import AddOption from '../../FormComponents/AddOption';
import QuestionStyles from '../../FormComponents/Question';
import Option from '../Option';
import Title from '../../FormComponents/Title';
import Button from '../../Button';

// EU05
function Question({ form, setForm, question, questionId }) {
  function changeTitle(newTitle) {
    const newQuestions = [...form.questions];
    newQuestions[questionId].title = newTitle;
    const newForm = { ...form, questions: newQuestions };
    setForm(newForm);
  }

  function addOption() {
    const number = form.questions[questionId].options.length + 1;
    const newQuestions = [...form.questions];
    newQuestions[questionId].options.push({ value: `Opção ${number}`, checked: false });
    const newForm = { ...form, questions: newQuestions };
    setForm(newForm);
  }

  function removeQuestion() {
    const newForm = { ...form };
    newForm.questions.splice(questionId, 1);
    setForm(newForm);
  }

  return (
    <QuestionStyles>
      <Title
        size="sm"
        value={question.title}
        onChange={(e) => changeTitle(e.target.value)}
        onFocus={(e) => e.target.select()}
      />
      <CgClose onClick={removeQuestion} />

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
          />
        ))
      ) : (
        <Option value="Resposta" type={question.type} />
      )}

      {question.type !== 'text' && (
        <AddOption>
          <Button onClick={addOption} type="button">
            <HiPlusSm size={30} />
            Adicionar opção
          </Button>
        </AddOption>
      )}
    </QuestionStyles>
  );
}
export default Question;
