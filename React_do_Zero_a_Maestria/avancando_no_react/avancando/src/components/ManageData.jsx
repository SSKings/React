import { useState } from "react";

const ManageData = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>
        <p>Valor: {value}</p>
        <button onClick={() => setValue(value + 1)}>Mudar o valor</button>
      </div>
    </div>
  );
};

export default ManageData;
