const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>profissão: {profissao}</li>
      </ul>
      {idade >= 18 && <p>Pode tirar carteira CNH</p>}
      {idade < 18 && <p>Não pode tirar carteira CNH</p>}
    </div>
  );
};

export default UserDetails;
