import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Sérgio", "Vera", "Neto"]);

  const [users, setUsers] = useState([
    { id: 1, nome: "Sérgio", age: 31 },
    { id: 2, nome: "Vera", age: 37 },
    { id: 3, nome: "Neto", age: 1.9 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}> {item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nome: {user.nome} <br />
            Idade: {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </div>
  );
};

export default ListRender;
