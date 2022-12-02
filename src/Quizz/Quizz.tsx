import "./Quizz.css";
import React from "react";
import Title from "../common/Title/Title";
import NavigateButton from "../common/NavigateButton/NavigateButton";

function Quizz(this: any) {
  return (
    <div>
      <div className="leftAligned">
        <NavigateButton
          text={"Accueil"}
          href={"sex-info"}
          colorFill={"F5F5F5"}
        />
      </div>
      <Title text={"Quizz"} />
      <br />
      <img
        src="https://i.ibb.co/j346Mn1/gragas.png"
        alt="Gragas"
        width="200"
        height="200"
      />
      <h2>Peux-tu répondre aux questions de Gragas ?</h2>
      <br />
      <form action="">
         <h4>Que faire si j'ai oublié ma capote ?</h4>
        <div className="yes">
            <input type="radio" name="q1" id="1" value="A" />
          <label htmlFor="1">
            Je vais desuite avec mon partenaire me faire dépister !
          </label>
        </div>
        <br />
        <input type="radio" className="no" name="q1" id="2" value="B" />
        <label htmlFor="2">
          Bah, pas grâve, je lui fais pleinement confiance...
        </label>
        <br />
        <br />
        <hr></hr>
        <br />
        <h4>Peut-on guérir du VIH ?</h4>
          <input type="radio" className="no" name="q2" id="3" value="A" />
        <label htmlFor="3">Oui</label>
        <br />
        <div className="yes">
          <input type="radio" name="q2" id="4" value="B" />
          <label htmlFor="4">Non</label>
        </div>
        <br />
        <br />
        <hr></hr>
        <br />
        <h4>Que veut dire l'Anagramme SIDA ?</h4>
          <input type="radio" className="no" name="q3" id="5" value="A" />
        <label htmlFor="5">
          Système Intelligent de Développement Automatique
        </label>
        <br />
        <div className="yes">
          <input type="radio" name="q3" id="6" value="B" />
          <label htmlFor="6">Syndrome d'Immuno Déficience Acquise</label>
        </div>
        <br />
        <br />
        <hr></hr>
        <button onClick={results}>Envoyer</button>
        <br />
        <br />
      </form>
    </div>
  );
}

function results() {
  var yes = document.getElementsByClassName("yes");

  const arr = Array.from(yes);

  arr.forEach((res) => {
    res.classList.add("result");
  });
}

export default Quizz;
