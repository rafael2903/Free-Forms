import OptionStyles from '../../FormComponents/Option';

function Option({ value, type, questionTitle, isChecked }) {
  if (type === 'text')
    return (
      <OptionStyles>
        <textarea type="text" value={value} disabled />
      </OptionStyles>
    );

  return (
    <OptionStyles>
      <input type={type} name={questionTitle} value={value} checked={isChecked} disabled />
      {value}
    </OptionStyles>
  );
}

export default Option;
