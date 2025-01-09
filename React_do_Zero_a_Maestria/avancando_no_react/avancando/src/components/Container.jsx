const Container = ({ children, value }) => {
  return (
    <div>
      <h1>Este é o container</h1>
      {children}
      <h2>Esse é o valor: {value}</h2>
    </div>
  );
};

export default Container;
