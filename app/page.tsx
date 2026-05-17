// app/page.tsx

export default function HomePage() {
  return (
    <main>

      <section className="p1">
        <div className="p1-left">
          <div>
            <p className="p1-eyebrow">Spectacle · Direction Artistique · Événement</p>
            <h1 className="p1-logo">
              PASSION<br />MENS
              <span>by Chippendales</span>
            </h1>
          </div>

          <nav className="p1-nav">
            <p className="p1-nav-item">Notre ADN</p>
            <p className="p1-nav-item">Le plateau artistique</p>
            <p className="p1-nav-item">Nos formules</p>
            <p className="p1-nav-item">Notre engagement</p>
            <p className="p1-nav-item">Contact</p>
          </nav>
        </div>

        <div className="p1-right">
          <div className="p1-number" aria-hidden="true">PM</div>

          <div className="p1-headline">
            <h2>
              Quand la scène devient<br />
              <strong>une expérience<br />inoubliable.</strong>
            </h2>
            <p>
              Un spectacle 360° conçu pour la gente féminine.
              De l&apos;entrée au plafond, chaque détail est orchestré.
              Ce n&apos;est pas un show qu&apos;on installe, c&apos;est un univers qu&apos;on crée.
            </p>
            <div className="p1-tags">
              <span className="pill">Bars &amp; Restaurants</span>
              <span className="pill">Casinos</span>
              <span className="pill">Salles 350+ pers.</span>
              <span className="pill">Événements privés</span>
            </div>
          </div>
        </div>
      </section>

      <section className="p2">
        <div className="p2-bg-text" aria-hidden="true">PASSION</div>

        <div className="p2-layout">
          <div className="p2-index" aria-hidden="true">Notre ADN</div>

          <div>
            <p className="section-kicker">Qui nous sommes</p>
            <h2 className="editorial-title">
              Nous ne vendons pas<br />
              <em>un spectacle.</em><br />
              Nous créons un moment.
            </h2>

            <div className="stats-row">
              <div className="stat-cell">
                <p className="stat-num">300</p>
                <p className="stat-lbl">prestations<br />par mois</p>
              </div>
              <div className="stat-cell">
                <p className="stat-num">+60</p>
                <p className="stat-lbl">spectacles<br />par an</p>
              </div>
              <div className="stat-cell">
                <p className="stat-num">20 ans</p>
                <p className="stat-lbl">d&apos;existence<br />et d&apos;expertise</p>
              </div>
              <div className="stat-cell">
                <p className="stat-num">100%</p>
                <p className="stat-lbl">féminin,<br />pensé pour elles</p>
              </div>
            </div>

            <div className="p2-text-cols">
              <div>
                <p className="body-s">
                  Depuis 20 ans, Passion Mens a développé une expertise unique :
                  transformer chaque événement féminin en une expérience totale, mémorable,
                  pensée dans les moindres détails. De l&apos;entrée à la scène, du plafond au sol,
                  chaque élément est orchestré.
                </p>
                <blockquote className="pullquote">
                  <p>&ldquo;Un show 360° où direction artistique, scénographie et performance ne font qu&apos;un.&rdquo;</p>
                </blockquote>
              </div>

              <div>
                <p className="body-s">
                  Nos clients nous font confiance depuis des années. Certains reviennent chaque saison,
                  d&apos;autres nous confient leurs plus grands événements après une première collaboration.
                  Cette fidélité n&apos;est pas un hasard : c&apos;est une promesse tenue, soir après soir.
                </p>
                <div className="occasions">
                  <span className="occ-tag">EVJF</span>
                  <span className="occ-tag">Anniversaire</span>
                  <span className="occ-tag">Retraite</span>
                  <span className="occ-tag">Ladies Night</span>
                  <span className="occ-tag">Journée de la Femme</span>
                  <span className="occ-tag">Galas</span>
                </div>
              </div>

              <div className="new-client-box">
                <h4>Un cadeau pour bien démarrer.</h4>
                <p>
                  Pour tout premier partenariat, nous vous offrons le délivrable complet
                  et le rétroplanning de votre communication événementielle.
                  Un document stratégique qui vous fera économiser des milliers d&apos;euros
                  et sécurisera le succès de votre soirée dès le premier soir.
                </p>
                <p className="fine">Offre réservée aux nouveaux clients · Sur demande à la réservation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p3">
        <p className="section-kicker">Le plateau artistique</p>

        <div className="p3-layout">
          <div>
            <h2 className="p3-title">
              Un plateau pensé pour<br />
              <em>l&apos;émotion.</em>
            </h2>
            <p className="p3-intro-text">
              Chaque performance est une décision artistique.
              Rien n&apos;est laissé au hasard, rien n&apos;est improvisé.
            </p>

            <div className="host-card">
              <h3>La Drag Queen Host :<br />notre différence absolue</h3>
              <p>
                Bien plus qu&apos;une animatrice, elle est la colonne vertébrale du show.
                La bonne copine que toutes les femmes attendaient : drôle, libre, complice.
                Elle crée le lien entre la puissance masculine sur scène et le public féminin.
                Grâce à elle, personne ne reste spectatrice.
              </p>
              <p className="host-note">
                Aucun autre prestataire en France n&apos;intègre ce rôle à ce niveau de sophistication dramaturgique.
              </p>
            </div>
          </div>

          <div className="perf-grid">
            <div className="perf-item">
              <p className="perf-num">01</p>
              <p className="perf-name">Chorégraphies</p>
              <p className="perf-desc">
                Tableaux d&apos;ensemble et solos construits autour d&apos;une narration scénique.
                Chaque tableau raconte quelque chose.
              </p>
            </div>
            <div className="perf-item">
              <p className="perf-num">02</p>
              <p className="perf-name">Striptease &amp; Burlesque</p>
              <p className="perf-desc">
                L&apos;art de l&apos;effeuillage revisité : sensuel, élégant, jamais vulgaire.
                Une esthétique construite, pas improvisée.
              </p>
            </div>
            <div className="perf-item">
              <p className="perf-num">03</p>
              <p className="perf-name">Feu</p>
              <p className="perf-desc">
                Performances pyrotechniques encadrées pour des tableaux à couper le souffle.
                Un moment de sidération pure.
              </p>
            </div>
            <div className="perf-item">
              <p className="perf-num">04</p>
              <p className="perf-name">Pole Dance</p>
              <p className="perf-desc">
                Art aérien et au sol. Puissance et grâce au service du spectacle,
                pas de la démonstration.
              </p>
            </div>
            <div className="perf-item">
              <p className="perf-num">05</p>
              <p className="perf-name">Aérien</p>
              <p className="perf-desc">
                Numéros suspendus pour les grands formats. Des moments que le public
                n&apos;attendait pas et n&apos;oubliera jamais.
              </p>
            </div>
            <div className="perf-item">
              <p className="perf-num">06</p>
              <p className="perf-name">Chant &amp; Live</p>
              <p className="perf-desc">
                Voix live intégrée au show pour une dimension émotionnelle supplémentaire.
                Le son devient personnage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p4">
        <div className="p4-header">
          <h2>Choisissez votre<br /><em>intensité.</em></h2>
          <p className="p4-note">
            Chaque formule intègre direction artistique, coordination,
            costumes et la Drag Queen Host. Transport en sus.
          </p>
        </div>

        <div className="formule-stack">

          <article className="fcard seduction">
            <div className="fcard-bar" aria-hidden="true"></div>
            <div className="fcard-name-col">
              <p className="fcard-name">Séduction</p>
              <p className="fcard-sub">L&apos;entrée dans l&apos;univers</p>
            </div>
            <div className="fcard-detail">
              <p className="col-title">Composition</p>
              <p>
                <strong>3 danseurs</strong> + Drag Queen Host<br />
                Chorégraphies scénarisées, interactions public, mise en scène soignée
              </p>
            </div>
            <div className="fcard-benefits">
              <p className="col-title">Idéal pour</p>
              <p className="benefit-line">Bars, restaurants, soirées privées intimes</p>
              <p className="benefit-line">Show compact, percutant, qui transforme n&apos;importe quelle salle</p>
              <p className="benefit-line">Idéal pour fidéliser votre clientèle féminine</p>
            </div>
            <div className="fcard-price-col">
              <p className="fcard-duree">25 à 45 min</p>
              <p className="fcard-price">2 500€</p>
              <p className="fcard-price-label">HT · hors transport</p>
            </div>
          </article>

          <article className="fcard passion">
            <div className="fcard-bar" aria-hidden="true"></div>
            <div className="fcard-name-col">
              <p className="fcard-name">Passion</p>
              <p className="fcard-sub">Le coeur de l&apos;expérience</p>
            </div>
            <div className="fcard-detail">
              <p className="col-title">Composition</p>
              <p>
                <strong>4 danseurs</strong> + Drag Queen Host<br />
                Mise en scène enrichie, effets visuels, costumes thématiques,
                montée dramaturgique construite
              </p>
            </div>
            <div className="fcard-benefits">
              <p className="col-title">Idéal pour</p>
              <p className="benefit-line">Soirées thématiques, casinos, restaurants premium</p>
              <p className="benefit-line">Le format qui embarque dans une vraie narration scénique</p>
              <p className="benefit-line">EVJF, anniversaires et départs en retraite marquants</p>
            </div>
            <div className="fcard-price-col">
              <p className="fcard-duree">45 à 75 min</p>
              <p className="fcard-price">3 500€</p>
              <p className="fcard-price-label">HT · hors transport</p>
            </div>
          </article>

          <article className="fcard signature star">
            <div className="fcard-bar" aria-hidden="true"></div>
            <p className="star-badge">Notre recommandation</p>
            <div className="fcard-name-col">
              <p className="fcard-name">Signature</p>
              <p className="fcard-sub">Le show qui fait la réputation</p>
            </div>
            <div className="fcard-detail">
              <p className="col-title">Composition</p>
              <p>
                <strong>5 danseurs</strong> + 1 artiste invitée + Drag Queen Host<br />
                Feu · Pole dance · Aérien · Burlesque<br />
                Scénographie complète, 5 actes, costumes haute qualité
              </p>
            </div>
            <div className="fcard-benefits">
              <p className="col-title">Pourquoi le choisir</p>
              <p className="benefit-line">L&apos;artiste invitée apporte une dimension inattendue et spectaculaire</p>
              <p className="benefit-line">Vos clients parleront encore du show le lendemain</p>
              <p className="benefit-line">Direction artistique sur mesure, interaction publique avancée</p>
              <p className="benefit-line">Nos clients Signature nous rappellent. Toujours.</p>
            </div>
            <div className="fcard-price-col">
              <p className="fcard-duree">1h à 1h30</p>
              <p className="fcard-price">5 500€</p>
              <p className="fcard-price-label">HT · hors transport</p>
            </div>
          </article>

          <article className="fcard grand">
            <div className="fcard-bar" aria-hidden="true"></div>
            <div className="fcard-name-col">
              <p className="fcard-name">Grand Show</p>
              <p className="fcard-sub">Hors catégorie</p>
            </div>
            <div className="fcard-detail">
              <p className="col-title">Composition</p>
              <p>
                <strong>10 danseurs et plus</strong> + Artistes guests + Host(s)<br />
                Son · Lumière · Pyrotechnie · Aérien · Chant live · Burlesque<br />
                Salles de 350 à 1 000 personnes
              </p>
            </div>
            <div className="fcard-benefits">
              <p className="col-title">Une production à part entière</p>
              <p className="benefit-line">Chaque détail orchestré des semaines en amont</p>
              <p className="benefit-line">Coordination technique complète sur site</p>
              <p className="benefit-line">Habillage sonore et scénographique personnalisé</p>
              <p className="benefit-line">Palais des congrès, casinos, hangars événementiels</p>
            </div>
            <div className="fcard-price-col">
              <p className="fcard-duree">Jusqu&apos;à 2h de show</p>
              <p className="fcard-price fcard-price-sm">Sur devis</p>
              <p className="fcard-price-label">À partir de 8 000€ HT</p>
            </div>
          </article>

        </div>

        <p className="p4-footnote">
          * Frais de transport selon localisation · TVA non incluse · Acompte 30% à la réservation
        </p>
      </section>

      <section className="p5">
        <p className="section-kicker">Notre engagement</p>
        <h2 className="editorial-title">
          On ne vous laisse<br /><em>pas seuls.</em>
        </h2>

        <div className="p5-grid">

          <div>
            <p className="body-s" style={{ marginBottom: '28px' }}>
              Nous sommes les seuls dans notre secteur à accompagner nos clients au-delà de la scène.
            </p>

            <div className="sup-item">
              <h4>Templates publicitaires éprouvés</h4>
              <p>
                Nos visuels et textes pub ont fait leurs preuves sur plusieurs événements.
                Pas de création from scratch : on vous donne ce qui fonctionne.
              </p>
            </div>
            <div className="sup-item">
              <h4>Configuration Meta Ads</h4>
              <p>
                Ciblage, budget, format : on vous guide sur le setup exact
                pour maximiser vos entrées avant même le soir J.
              </p>
            </div>
            <div className="sup-item">
              <h4>Conseil budget publicitaire</h4>
              <p>
                On vous dit combien investir selon la taille de votre salle
                et votre objectif de remplissage.
              </p>
            </div>
            <div className="sup-item">
              <h4>Direction artistique clé en main</h4>
              <p>
                Chorégraphies, costumes, scénographie, timing : tout est géré en amont.
                Vous accueillez, on s&apos;occupe du reste.
              </p>
            </div>
            <div className="sup-item">
              <h4>Coordination logistique complète</h4>
              <p>
                Déplacements, installation, briefing technique : aucune surprise le soir J.
              </p>
            </div>

            <div className="fidelity-box">
              <h4>Ils nous font confiance depuis des années.</h4>
              <p>
                Nos partenaires ne repartent pas après une soirée. Ils reviennent.
                Certains depuis plusieurs saisons, d&apos;autres après une première collaboration
                qui a dépassé toutes leurs attentes. Cette fidélité est notre plus belle référence.
              </p>
            </div>
          </div>

          <div className="proof-section">
            <h3>Ce qu&apos;ils ont vécu.</h3>

            <div className="proof-card">
              <div>
                <p className="proof-city">Migennes</p>
                <span className="sold-badge">SOLD OUT</span>
                <p className="proof-big">108</p>
                <p className="proof-big-label">entrées refusées</p>
              </div>
              <div>
                <p className="proof-text">
                  La salle était pleine avant l&apos;heure. 108 personnes n&apos;ont pas pu entrer.
                  La cliente, conquise, a immédiatement repassé commande en louant un espace
                  400 personnes et opté pour notre pack Signature.
                </p>
                <p className="proof-followup">Une première collaboration devenue partenariat durable.</p>
              </div>
            </div>

            <div className="proof-card">
              <div>
                <p className="proof-city">Arlon</p>
                <span className="sold-badge">SOLD OUT</span>
                <p className="proof-big">400</p>
                <p className="proof-big-label">entrées · salle comble</p>
              </div>
              <div>
                <p className="proof-text">
                  2 heures de show et le public en voulait encore. Une impression unanime :
                  le spectacle était passé beaucoup trop vite. Avis enthousiastes recueillis
                  sur place, témoignages positifs spontanés.
                </p>
                <p className="proof-followup">Quand 2h semblent durer 20 minutes, c&apos;est qu&apos;on a bien fait notre travail.</p>
              </div>
            </div>

            <div className="proof-card">
              <div>
                <p className="proof-city">Verdun</p>
                <span className="sold-badge or">CAS RÉEL</span>
                <p className="proof-big">×4</p>
                <p className="proof-big-label">fréquentation multipliée</p>
              </div>
              <div>
                <p className="proof-text">
                  La cliente voulait annuler. 20€ investis en Meta Ads avec nos templates :
                  135 entrées au lieu de 35 prévues. L&apos;événement a quadruplé sa fréquentation.
                </p>
                <p className="proof-followup">+100 entrées grâce à 20€ investis.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="p6">
        <div className="p6-left">
          <h2 className="p6-headline">
            Votre prochaine soirée<br />
            mérite d&apos;être<br />
            <em>inoubliable.</em>
          </h2>
          <p className="p6-sub">
            Demandez votre devis personnalisé sous 24h.
            Disponibilités limitées, réservation recommandée 4 à 6 semaines à l&apos;avance.
          </p>
          <a href="mailto:contact@passionmens.fr" className="cta-btn">Demander un devis</a>
          <a href="tel:+33600000000" className="cta-btn sec">Nous appeler</a>
        </div>

        <div className="p6-right">
          <p className="p6-info-title">Nous joindre</p>

          <div className="p6-info-row">
            <p className="p6-info-label">Email</p>
            <p className="p6-info-val">contact@passionmens.fr</p>
          </div>
          <div className="p6-info-row">
            <p className="p6-info-label">Téléphone</p>
            <p className="p6-info-val">+33 6 00 00 00 00</p>
          </div>
          <div className="p6-info-row">
            <p className="p6-info-label">Site web</p>
            <p className="p6-info-val">www.passionmens.fr</p>
          </div>
          <div className="p6-info-row">
            <p className="p6-info-label">Instagram &amp; TikTok</p>
            <p className="p6-info-val">@passionmens</p>
          </div>

          <p className="p6-brand" aria-hidden="true">PASSION MENS</p>
        </div>
      </section>

    </main>
  );
}
