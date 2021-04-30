import { Option } from './styles';

function QuestionOption({ value, type }) {
  const options = {
    checkbox: () => (
      <Option>
        <input type={type} checked disabled />
        {value}
      </Option>
    ),
    radio: () => (
      <Option>
        <input type={type} checked disabled />
        {value}
      </Option>
    ),
    text: () => (
      <Option>
        <input type={type} placeholder={value} disabled />
      </Option>
    ),
  };

  return options[type]();
}

export default QuestionOption;
