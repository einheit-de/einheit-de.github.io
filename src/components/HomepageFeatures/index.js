import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

function Feature({ Svg, title, description, background }) {
  return (
    // h3 background depending on light/dark mode
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} style={{ background: background }}
          role="img" />

      </div>
      <div className="text--center padding-horiz--md">
        <h3
          style={{ background: "radial-gradient(var(--ifm-color-primary), transparent)" }}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default class HomepageFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FeatureList: [
        {
          title: <Translate id='homepage.feature1.title'>Gerechtigkeit</Translate>,
          Svg: require('@site/static/img/justice-alt.svg').default,
          background: "whitesmoke",
          description: (
            <>
              <li><Translate id='homepage.feature1'>Keine Sonderbehandlungen für Politiker!</Translate></li>
              <li><Translate id='homepage.feature1.1'>Das Gesetz muss wieder den Bürgern dienen!</Translate></li>
            </>
          ),
        },
        {
          title: <Translate id='homepage.feature2.title'>Lösungen</Translate>,
          Svg: require('@site/static/img/logo.svg').default,
          background: "whitesmoke",
          description: (
            <>
              <li><Translate id='homepage.feature2'>Undogmatisch und unverzüglich</Translate></li>
              <li><Translate id='homepage.feature2.1'>Ein Ende dem Koalitionswahnsinn</Translate></li>
              <li><Translate id='homepage.feature2.2'>Zur Liebe zum Volk</Translate></li>
            </>
          ),
        },
        {
          title: <Translate id='homepage.feature3.title'>Privatsphäre</Translate>,
          Svg: require('@site/static/img/intelligence.svg').default,
          background: "whitesmoke",
          description: (
            <>
              <li><Translate id='homepage.feature3'>Einschränkung der Staatsgewalt zum Schutz des Privaten</Translate></li>
              <li><Translate id='homepage.feature3.1'>Innennachrichtendienst abbauen. Keine zweite Stasi/Gestapo!</Translate></li>
              <li><Translate id='homepage.feature3.2'>Klartext reden muss erlaubt sein!</Translate></li>
            </>
          ),
        },
      ]
    };
  }

  render() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {this.state.FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}