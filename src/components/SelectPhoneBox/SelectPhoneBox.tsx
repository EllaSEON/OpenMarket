import { S } from "./style";

interface ObjectProps {
  value: string;
  name: string;
}
interface TotalProps {
  id: string;
  value: string;
  options: ObjectProps[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectPhoneBox({ options, defaultValue, onChange }: TotalProps) {
  return (
    <S.Select onChange={onChange}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          defaultValue={defaultValue}
        >
          {option.name}
        </option>
      ))}
    </S.Select>
  );
}
export default SelectPhoneBox;
