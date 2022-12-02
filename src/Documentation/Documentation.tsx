import "./Documentation.css";
import React from "react";
import Title from "../common/Title/Title";
import NavigateButton from "../common/NavigateButton/NavigateButton";

function Documentation() {
  return (
    <div>
      <div className="leftAligned">
        <NavigateButton
          text={"Accueil"}
          href={"sex-info"}
          colorFill={"F5F5F5"}
        />
      </div>
      <Title text={"Documentation"} />
      <div className="paddingX">
        <p>
          <span className="titles">Rapide Résumé :</span> L'acronyme V.I.H.
          désigne le Virus de l'Immunodéficience Humaine. Lorsqu'une personne
          est infectée, le VIH attaque progressivement les CD4 (ou T4)
          c'est-à-dire certaines cellules qui coordonnent l'immunité
          (c'est-à-dire les défenses de l'organisme contre les microbes).
        </p>
        <br />
        <p className="titles">
          Quelle est la différence entre l’infection par le VIH et le SIDA ?
        </p>
        <p>
          Une fois infecté, l’organisme ne peut pas éliminer complètement le
          vih. Cependant le vih met en général plusieurs années avant de
          détruire les défenses immunitaires. On ne parle de sida que lorsqu’une
          personne développe une maladie opportuniste. Quand une personne a le
          sida c’est qu’elle est déjà forcément infectée par le vih. Mais toutes
          les personnes infectées par le vih ne développent pas forcément le
          sida (voir ci-dessus). Les traitements actuels contre le vih ont
          plusieurs objectifs : <br />
          -empêcher que l’infection par le vih évolue vers le sida,
          <br />
          -soigner les personnes qui ont développé le sida,
          <br />
          -empêcher la transmission du vih à une personne qui n'est pas
          infectée. Cette stratégie s'appelle le tasp.
        </p>
        <br />
        <b className="titles">
          Être séropositif-ve, est-ce la même chose qu’avoir le SIDA ?
        </b>
        <p>
          Etre séropositif-ve au VIH signifie qu’on est porteur du virus. Cela
          ne veut pas dire qu’on est forcément arrivé au stade SIDA, ni même
          qu'on y sera un jour. Seul un test de dépistage permet de savoir si on
          est ou non séropositif-ve au VIH.
          <br /> Le test de dépistage recherche les anticorps contre le VIH que
          l’organisme produit pour essayer de se protéger du virus.
          <br /> Si les tests sont positifs, cela signifie qu’on est
          séropositif-ve au VIH (porteur du virus). Si le test est négatif plus
          de 6 semaines (ou 3 mois) après le risque, cela signifie qu'on est
          séronégatif-ve au VIH (non porteur du virus).
          <br />
          <br />
          <span className="titles">Tasp ; Tout savoir :</span>
          <br /> Le Tasp signifie qu’une personne séropositive pour le VIH qui a
          une charge virale indétectable depuis 6 mois sous traitement efficace
          et qui est observante de son traitement et du suivi médical ne
          transmet plus le virus.
          <br /> Comment cela est-il possible ? Après une contamination par le
          VIH, le virus se multiplie, la quantité de virus dans le sang (charge
          virale) augmente et peut atteindre des valeurs très élevées. Le
          traitement antirétroviral bloque le virus et l’empêche de se
          multiplier.
          <br /> La charge virale baisse alors progressivement en 1 à 6 mois
          pour atteindre une valeur en dessous du seuil détecté en laboratoire,
          soit 50 copies par millilitre de sang. On dit alors que la charge
          virale est indétectable.
          <br /> Elle est trop basse pour pouvoir contaminer d’autres personnes
          en cas d’exposition. Les traitements ARV qui avaient pour objectif
          initial de traiter et améliorer l’espérance et la qualité de vie des
          personnes vivant avec le VIH deviennent un moyen de prévention très
          efficace.
        </p>
        <br />
        <br />
        <b className="titles">Comment se protéger des IST ?</b>
        <p>Les infections sexuellement transmissibles ou IST sont des maladies provoquées par des microbes (virus, bactéries, parasites) qui peuvent être transmises plus ou moins facilement. On peut s'en protéger et pour certaines IST (hépatite B, papillomavirus), il est même possible de se faire vacciner.
          Le préservatif reste un moyen simple pour se protéger et protéger l'autre lors de chaque rapport sexuel.
          Attention : une contraception (pilule, spermicides, DIU…) ne protège pas des IST.
          Le dépistage régulier des IST comme du VIH est important lorsqu'on a plusieurs partenaires et à chaque fois qu'on souhaite arrêter le préservatif avec un nouveau partenaire régulier (notamment car beaucoup d’IST n'ont pas ou peu de symptômes…).
          Pour le VIH et pour certaines personnes particulièrement exposées, la PrEP s'avère un moyen très efficace pour ne pas être contaminé.
          De même, le TasP (Treatment as Prevention), c'est-à-dire le traitement qu'une personne séropositive prend contre le VIH, représente également un moyen de prévention puisqu'il permet d'empêcher la transmission du virus.
          La plupart des IST se soignent facilement. Aussi, après avoir découvert qu'on est infecté, il convient de :
          prendre les traitements prescrits par le médecin et les suivre jusqu'au bout,
          prévenir son ou ses partenaire(s) afin qu'il(s) ou elle(s) puisse(nt) également se faire dépister et traiter.
        </p>
      </div>
    </div>
  );
}

export default Documentation;
