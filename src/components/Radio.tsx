interface IRadio {
  label: string;
  htmlFor: string;
  id: string;
  value: string;
  name?: string;
  type?: string;
  defaultChecked?: boolean;
  callback: (e: any) => void;
}

const Radio: React.FC<IRadio> = ({
  label,
  htmlFor,
  name = "status",
  id,
  type = "radio",
  callback,
  value,
  defaultChecked = false,
}) => {
  const getEmployeeStatus = (e: any) => {
    const value = e.target.value === "true";
    callback(value);
  };

  return (
    <label htmlFor={htmlFor}>
      <input
        style={{
          width: "20px",
          height: "20px",
          verticalAlign: "middle",
          marginRight: "10px",
        }}
        name={name}
        id={id}
        type={type}
        onChange={getEmployeeStatus}
        value={value}
        defaultChecked={defaultChecked}
      />
      {label}
    </label>
  );
};

export default Radio;
