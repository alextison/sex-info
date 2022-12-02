import "./Title.css";

function Title(props: { text: string }) {
  return (
    <div id="wrapper">
      <div id="container">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}

export default Title;
