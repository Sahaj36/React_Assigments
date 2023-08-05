const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
};
