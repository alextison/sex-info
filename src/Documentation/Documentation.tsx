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
        <p>
          Les infections sexuellement transmissibles ou IST sont des maladies
          provoquées par des microbes (virus, bactéries, parasites) qui peuvent
          être transmises plus ou moins facilement. On peut s'en protéger et
          pour certaines IST (hépatite B, papillomavirus), il est même possible
          de se faire vacciner. Le préservatif reste un moyen simple pour se
          protéger et protéger l'autre lors de chaque rapport sexuel.
          <br />
          Attention : une contraception (pilule, spermicides, DIU…) ne protège
          pas des IST. Le dépistage régulier des IST comme du VIH est important
          lorsqu'on a plusieurs partenaires et à chaque fois qu'on souhaite
          arrêter le préservatif avec un nouveau partenaire régulier (notamment
          car beaucoup d’IST n'ont pas ou peu de symptômes…).
          <br />
          Pour le VIH et pour certaines personnes particulièrement exposées, la
          PrEP s'avère un moyen très efficace pour ne pas être contaminé. De
          même, le TasP (Treatment as Prevention), c'est-à-dire le traitement
          qu'une personne séropositive prend contre le VIH, représente également
          un moyen de prévention puisqu'il permet d'empêcher la transmission du
          virus. La plupart des IST se soignent facilement.
          <br /> Aussi, après avoir découvert qu'on est infecté, il convient de
          : prendre les traitements prescrits par le médecin et les suivre
          jusqu'au bout, prévenir son ou ses partenaire(s) afin qu'il(s) ou
          elle(s) puisse(nt) également se faire dépister et traiter.
        </p>
        <br />
        <br />
        <b className="titles">Comment diagnotiquer une IST ?</b>
        <br />
        <p>
          Les infections sexuellement transmissibles peuvent provoquer des
          symptômes tels que :<br /> des brûlures en urinant, surtout chez
          l'homme avec la blennorragie ou les chlamydioses ; des pertes
          vaginales avec les trichomonases, les vaginoses à Gardnerella, parfois
          avec les chlamydioses ; des boutons au niveau de la région des organes
          sexuels, avec l'herpès, ou même sur l'ensemble du corps, avec la
          syphilis ; des ulcérations,qui ressemblent à une plaie, des organes
          génitaux, comme dans la syphilis ou l'herpès ; des démangeaisons, avec
          l'herpès, parfois avec les condylomes, toujours avec les morpions ;
          des espèces de verrues dans le cas des condylomes.
          <br /> Quand on a ces signes, il est important de consulter rapidement
          un médecin qui fera le diagnostic et proposera un traitement. Si vous
          allez consulter un médecin en ville, expliquez-lui les risques
          auxquels vous pensez avoir été exposé-e, et décrivez-lui vos
          symptômes. Il pourra vous proposer des analyses ou un traitement. Il
          arrive aussi que certaines IST soient asymptomatiques, c'est-à- dire
          qu'elles ne présentent aucune manifestation clinique. D'où
          l'importance de réaliser un check-up régulier.
          <br /> Est-ce qu'on peut me dépister toutes les IST en même temps ?
          Les infections sexuellement transmissibles qui peuvent se dépister par
          une prise de sang sont : l'infection par le VIH, l'hépatite B et la
          syphilis, à condition de bien respecter le délai entre le risque de
          transmission et la prise de sang.
          <br /> Certaines maladies ne seront découvertes que lors d'un examen
          médical (le médecin observe les lésions et peut faire le diagnostic).
          Les chlamydioses peuvent maintenant être recherchées par une analyse
          d'urines. Pour les femmes, il est important de bénéficier
          régulièrement d'un examen gynécologique qui permettra de rechercher
          les condylomes à l'origine des cancers du col de l'utérus.
          <br /> Les CeGIDD (Centre Gratuit d’Information, de Dépistage et de
          Diagnostic) ne peuvent faire parfois que les tests du VIH, de
          l'hépatite B et de l'hépatite C. Certains de ces centres sont
          également habilités à traiter l'ensemble des IST, gratuitement, mais
          cela ne sera pas forcément anonyme.
        </p>
        <br />
        <br />
        <b className="titles">Comment se transmet le VIH ?</b>
        <br />
        <p>
          Le VIH (Virus de l’Immunodéficience Humaine) responsable du SIDA
          (Syndrome d’Immuno-Déficience Acquise) peut se transmettre d’une
          personne contaminée à une autre : <br />• lors de rapports sexuels non
          protégés par un préservatif (externe ou interne) avec pénétration
          vaginale et/ou pénétration anale, <br />• lors d'une fellation
          (essentiellement en cas d’éjaculation dans la bouche), <br />• Par
          voie sanguine lors de partage du matériel d’injection en cas d’usage
          de drogues injectables, d’échanges de paille pour sniffer et en cas de
          piqûre accidentelle avec du matériel de soins contaminé pour les
          professionnels de la santé (Accident d'Exposition au Sang),
          <br /> • de la mère à l’enfant au cours de la grossesse ou de
          l’allaitement. <br />
          <br />
          En cas de rapport sexuel avec une personne séropositive au VIH, la
          transmission du VIH n’est pas systématique. Elle peut : <br />•
          intervenir dès le premier rapport, <br />• ou intervenir au bout d'un
          grand nombre de rapports, <br />• ou ne pas avoir lieu du tout. La
          probabilité de transmission est variable selon différents critères, en
          particulier en fonction de la quantité de virus chez la personne
          séropositive (charge virale).
          <br /> La prise d’un traitement antirétroviral limite considérablement
          le risque de transmission du VIH. Ce risque est nul si la charge
          virale VIH est indétectable depuis plus de 6 mois. Une personne qui a
          le VIH et qui prend un traitement efficace ne peut donc pas le
          transmettre.
        </p>
        <br />
        <br />
        <b className="titles">Réactions à avoir</b>
        <br />
        <p>
          Que faire lorsque la capote a craqué ou qu’on l’a oubliée ? Que faire
          si votre partenaire ne l’a pas mise ou l’a enlevée pendant la
          pénétration ? <br />
          Au plus tard dans les 48 heures suivant un risque, vous pouvez vous
          rendre aux Urgences des hôpitaux ou bien dans des Centres de Dépistage
          (CEGIDD), pour demander si le TPE (traitement post-exposition) est
          indiqué dans votre situation. <br />
          L’objectif de ce traitement est d’empêcher la contamination par le VIH
          si vous y avez été exposé. Le TPE est d’autant plus efficace qu’il est
          pris tôt, idéalement au cours des 1ères heures. Il n’est plus efficace
          au-delà de 48 heures.
          <br /> Le TPE est peu connu. Souvent les personnes qui nous contactent
          après avoir pris un risque ne le connaissent pas ou ne savent pas si
          elles peuvent en bénéficier. Et elles se heurtent parfois à des
          difficultés pour y accéder. <br />
          <br />
          Lorsqu’une personne est mise sous TPE, elle est souvent seule face à
          un traitement qui doit durer 28 jours. En effet, on constate que les
          services hospitaliers ne peuvent pas toujours accompagner dans la
          durée un traitement qui est loin d’être anodin. <br />A noter que le
          TPE est indiqué dans des situations précises : des pénétrations anales
          ou vaginales avec un-e partenaire ayant le VIH et une charge virale
          supérieure à 50 copies, ou avec un partenaire dont le statut VIH est
          inconnu et appartenant à un groupe à prévalence élevée pour le VIH.
          <br />
          Le TPE est parfois prescrit par erreur, par exemple si un homme a reçu
          une fellation, ou bien parce qu’une personne a partagé une cigarette
          avec quelqu’un, ou après un simple baiser.
          <br />
          <br /> Nous rappelons que ces situations ne présentent aucun risque de
          transmission du VIH. Si vous venez d'être exposé à un risque de
          transmission du VIH ou en cas de souci avec le TPE, n'hésitez pas à
          nous solliciter. Sida Info Service accompagne depuis de nombreuses
          années toutes celles et tous ceux qui se retrouvent dans des
          situations où le TPE peut s’avérer nécessaire.
          <br /> Le Traitement Post-Exposition (TPE) permet d'empêcher une
          contamination lorsqu’on a été exposé au VIH. Il se compose de
          plusieurs médicaments actifs contre le VIH et il doit être pris
          pendant 28 jours. <br />
          <br />
          Pour que son efficacité soit la meilleure possible, il faut le débuter
          immédiatement, de préférence moins de 4 heures après le risque et au
          plus tard dans les 48 heures, après un risque de transmission du VIH.
          Ce traitement est très efficace dès lors qu'il est pris correctement
          pendant tout sa durée.
          <br /> Vous avez oublié le préservatif ou bien il a craqué ? Vous ne
          prenez pas la PrEP ? Si votre partenaire est séropositif-ve au VIH et
          que sa charge virale n'est pas indétectable, il y a un risque de
          transmission du VIH.
          <br /> Ne perdez pas de temps. Rendez-vous immédiatement au service
          des urgences d’un hôpital pour faire évaluer le risque et bénéficier
          éventuellement d’un Traitement Post-Exposition.
        </p>
        <br />
        <br />
        <b className="titles">Traitement</b>
        <br />
        <p>
          A noter que le TPE est indiqué dans des situations précises : des
          pénétrations anales ou vaginales avec un-e partenaire ayant le VIH et
          une charge virale supérieure à 50 copies, ou avec un partenaire dont
          le statut VIH est inconnu et appartenant à un groupe à prévalence
          élevée pour le VIH.
          <br /> Le TPE est parfois prescrit par erreur, par exemple si un homme
          a reçu une fellation, ou bien parce qu’une personne a partagé une
          cigarette avec quelqu’un, ou après un simple baiser. <br />
          Nous rappelons que ces situations ne présentent aucun risque de
          transmission du VIH.
          <br /> Si vous venez d'être exposé à un risque de transmission du VIH
          ou en cas de souci avec le TPE, n'hésitez pas à nous solliciter. Sida
          Info Service accompagne depuis de nombreuses années toutes celles et
          tous ceux qui se retrouvent dans des situations où le TPE peut
          s’avérer nécessaire.
          <br /> Le Traitement Post-Exposition (TPE) permet d'empêcher une
          contamination lorsqu’on a été exposé au VIH. Il se compose de
          plusieurs médicaments actifs contre le VIH et il doit être pris
          pendant 28 jours. <br />
          Pour que son efficacité soit la meilleure possible, il faut le débuter
          immédiatement, de préférence moins de 4 heures après le risque et au
          plus tard dans les 48 heures, après un risque de transmission du VIH.
          Ce traitement est très efficace dès lors qu'il est pris correctement
          pendant tout sa durée.
          <br /> Vous avez oublié le préservatif ou bien il a craqué ? Vous ne
          prenez pas la PrEP ? Si votre partenaire est séropositif-ve au VIH et
          que sa charge virale n'est pas indétectable, il y a un risque de
          transmission du VIH. Ne perdez pas de temps. Rendez-vous immédiatement
          au service des urgences d’un hôpital pour faire évaluer le risque et
          bénéficier éventuellement d’un Traitement Post-Exposition.
        </p>
        <br />
        <br />
        <b className="titles">Glossaire</b>
        <br />
        <p>
          <strong>Vih</strong> = virus de l’immunodéficience humaine
          <br />
          <strong>Sida</strong> = syndrome d'immuno déficience acquise
          <br />
          <strong>asp</strong> = Treatment as Prevention (traitement comme
          Prévention)
          <br />
          <strong>Tpe</strong> = Traitement Post Exposition
          <br />
        </p>
      </div>
    </div>
  );
}

export default Documentation;
