import React from 'react'
import Translate from '@docusaurus/Translate'
import { defaultMessages } from '@consent-manager/interface-default'

export class i18n {
  constructor() {
    // const introduction = {
    //   title: "consent-manager.introduction.title",
    //   description: "consent-manager.introduction.description",
    //   learnMore: "consent-manager.introduction.learn-more",
    //   enableAll: "consent-manager.introduction.enable-all",
    // }

    // Hack, since write-translations doesn't work with objects/nested strings, yet!
    const
      introduction_title = "consent-manager.introduction.title",
      introduction_description = "consent-manager.introduction.description",
      introduction_learnMore = "consent-manager.introduction.learn-more",
      introduction_enableAll = "consent-manager.introduction.enable-all",

      form_headline = "consent-manager.form.headline",
      form_description = "consent-manager.form.description",
      form_description_p0 = "consent-manager.form.description.0",
      form_description_p1 = "consent-manager.form.description.1",
      form_description_p2 = "consent-manager.form.description.2",
      form_description_p3 = "consent-manager.form.description.3",
      form_reset = "consent-manager.form.reset",
      form_enableAll = "consent-manager.form.enable-all",
      form_disableAll = "consent-manager.form.disable-all",
      form_save = "consent-manager.form.save"



    defaultMessages[introduction_title] =
      <Translate id={introduction_title}>
        Datenschutz aktiviert
      </Translate>
    defaultMessages[introduction_description] =
      <Translate id={introduction_description}>
        Einige Webseitenfunktionen sind zum Schutz Ihrer Privatsphäre deaktiviert.
      </Translate>
    defaultMessages[introduction_learnMore] =
      <Translate id={introduction_learnMore}>
        Mehr erfahren
      </Translate>
    defaultMessages[introduction_enableAll] =
      <Translate id={introduction_enableAll}>
        Alle Funktionen aktivieren
      </Translate>

    defaultMessages[form_headline] =
      <Translate id={form_headline}>
        Webseitenfunktionen und Cookies
      </Translate>
    defaultMessages[form_description] = () => {
      return (
        <>
          <p>
            <Translate id={form_description_p0}>
              Standardmäßig sind Funktionen von Drittanbietern deaktiviert, um Ihre Privatsphäre zu schützen.
            </Translate>
          </p>
          <p>
            <Translate id={form_description_p1}>
              Um Inhalte von Drittanbietern anzuzeigen, müssen Sie zunächst deren Geschäftsbedingungen akzeptieren.
              Dazu gehören Cookie-Richtlinien,
              die sich jederzeit ändern können und auf die wir keinen Einfluss haben.
            </Translate>
            <br />
            <Translate id={form_description_p2}>
              Wenn Sie diese Inhalte nicht anzeigen, werden keine Cookies von Drittanbietern
              auf Ihrem Gerät installiert.
            </Translate>
          </p>
          <p>
            <Translate id={form_description_p3}>
              Durch die Aktivierung der Funktionen erklären Sie sich mit den Nutzungsbedingungen der Anbieter
              und deren Cookie Richtlinien einverstanden.
              Sie können diese Funktionen jederzeit wieder deaktivieren.
            </Translate>
          </p>
        </>
      )
    }
    defaultMessages[form_reset] =
      <Translate id={form_reset}>
        Einstellungen zurückzusetzen
      </Translate>
    defaultMessages[form_enableAll] =
      <Translate id={form_enableAll}>
        Alle Funktionen aktivieren
      </Translate>
    defaultMessages[form_disableAll] =
      <Translate id={form_disableAll}>
        Alle Funktionen deaktivieren
      </Translate>
    defaultMessages[form_save] =
      <Translate id={form_save}>
        Speichern und schließen
      </Translate>
  }
}
