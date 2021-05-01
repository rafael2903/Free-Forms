import { CgClose } from 'react-icons/cg';
import { Option } from './styles';

function QuestionOption({ value, type, form, setForm, questionId, optionId }) {
  function removeOption() {
    const newForm = { ...form };
    newForm.questions[questionId].options.splice(optionId, 1);
    setForm(newForm);
  }

  function changeOption(newText) {
    const newForm = { ...form };
    newForm.questions[questionId].options[optionId] = newText;
    setForm(newForm);
  }

  if (type === 'text')
    return (
      <Option>
        <input type="text" placeholder={value} disabled />
      </Option>
    );

  return (
    <Option>
      <input type={type} checked disabled />
      <CgClose onClick={removeOption} />
      <input type="text" value={value} onChange={(e) => changeOption(e.target.value)} />
    </Option>
  );
}

export default QuestionOption;
