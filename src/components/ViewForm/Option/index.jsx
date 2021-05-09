import OptionStyles from '../../FormComponents/Option';

// EU05
function Option({ value, type, form, setForm, questionTitle, questionId, optionId, isChecked }) {
  function changeSelected() {
    const newForm = { ...form };
    if (type === 'radio') {
      newForm.questions[questionId].options = newForm.questions[
        questionId
      ].options.map((option) => ({ value: option.value, checked: false }));
      newForm.questions[questionId].options[optionId].checked = true;
    } else {
      const prev = newForm.questions[questionId].options[optionId].checked;
      newForm.questions[questionId].options[optionId].checked = !prev;
    }
    setForm(newForm);
  }

  function changeText(e) {
    const newForm = { ...form };
    newForm.questions[questionId].value = e.target.value;
    setForm(newForm);
  }

  if (type === 'text')
    return (
      <OptionStyles>
        <textarea type="text" placeholder={value} onChange={changeText} />
      </OptionStyles>
    );

  return (
    <OptionStyles>
      <input
        type={type}
        name={questionTitle}
        value={value}
        checked={isChecked}
        onChange={changeSelected}
      />
      {value}
    </OptionStyles>
  );
}

export default Option;
