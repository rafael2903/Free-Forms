import { CgClose } from 'react-icons/cg';
import OptionStyles from '../../FormComponents/Option';

// EU05
function Option({ value, type, form, setForm, questionId, optionId }) {
  function removeOption() {
    const newForm = { ...form };
    newForm.questions[questionId].options.splice(optionId, 1);
    setForm(newForm);
  }

  function changeOption(newText) {
    const newForm = { ...form };
    newForm.questions[questionId].options[optionId].value = newText;
    setForm(newForm);
  }

  if (type === 'text')
    return (
      <OptionStyles>
        <input type="text" placeholder={value} disabled onFocus={(e) => e.target.select()} />
      </OptionStyles>
    );

  return (
    <OptionStyles>
      <input type={type} checked disabled />
      <CgClose onClick={removeOption} />
      <input
        type="text"
        value={value}
        onChange={(e) => changeOption(e.target.value)}
        onFocus={(e) => e.target.select()}
      />
    </OptionStyles>
  );
}

export default Option;
