const TemplateExpressions = () => {
  const pessoa = {
    nome: "sérgio",
    idade: 31,
    sexo: "M",
    endereco: {
      rua: "Rua A",
      num: "2000",
      bairro: "Nova América",
    },
  };

  return (
    <div>
      <h1>Olá {pessoa.nome}, tudo bem?</h1>
      <p>Você tem {pessoa.idade} anos</p>
      <p>
        É do sexo{" "}
        {(pessoa.sexo === "M" && "Masculino") ||
          (pessoa.sexo === "F" && "Feminino")}
      </p>
      <p>Seu Endereço é:</p>
      <p>Rua - {pessoa.endereco.rua}</p>
      <p>Nº - {pessoa.endereco.num}</p>
      <p>bairro - {pessoa.endereco.bairro}</p>
    </div>
  );
};

export default TemplateExpressions;
