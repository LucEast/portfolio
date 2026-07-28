import type { CaseStudyContent } from './types';

export const currentViewCaseStudy: CaseStudyContent = {
  title: 'Current View',
  subtitle: {
    de: 'Ein Obsidian-Plugin, das den Ansichtsmodus von Notizen automatisch nach Regeln statt manuell steuert.',
    en: 'An Obsidian plugin that controls note view modes automatically via rules instead of manual switching.',
  },
  tags: ['TypeScript', 'Obsidian API', 'GitHub Actions', 'semantic-release'],
  sections: {
    problem: {
      de: 'Obsidian öffnet jede Notiz im zuletzt genutzten Ansichtsmodus (Reading, Live Preview, Source) – unabhängig davon, worum es sich bei der Notiz handelt. Templates, Tagesnotizen, fertige Dokumentation und aktive Arbeitsnotizen brauchen aber eigentlich unterschiedliche Modi, und das manuell bei jeder Datei umzuschalten ist auf Dauer Reibung, die niemand braucht.',
      en: "Obsidian opens every note in whichever view mode was last used (Reading, Live Preview, Source) — regardless of what kind of note it actually is. Templates, daily notes, finished documentation and active working notes all want a different mode, and manually switching per file is exactly the kind of friction nobody needs.",
    },
    context: {
      de: 'Community-Plugin für Obsidian, entwickelt und alleine gepflegt in TypeScript gegen die öffentliche Obsidian-Plugin-API. Muss sich in den bestehenden Plugin-Review-Prozess der Obsidian Community einfügen und mit anderen verbreiteten Plugins (z.B. Notebook Navigator) zusammenspielen, ohne deren interne Implementierung anzufassen.',
      en: "A community plugin for Obsidian, built and solely maintained in TypeScript against the public Obsidian plugin API. Has to fit into Obsidian's community plugin review process and interoperate with other widely used plugins (e.g. Notebook Navigator) without reaching into their internals.",
    },
    responsibility: {
      de: 'Alleiniger Autor und Maintainer: Konzept, Implementierung, Release-Pipeline, Dokumentation und Community-Support (Issues/Feature-Requests) von der ersten Version bis heute.',
      en: 'Sole author and maintainer: concept, implementation, release pipeline, documentation and community support (issues/feature requests) from the first release to today.',
    },
    approach: {
      de: [
        'Regel-Engine mit vier Regeltypen: Frontmatter, Dateipfad/RegEx-Pattern, Tag und Ordner',
        'Feste Prioritätsreihenfolge bei Konflikten: Frontmatter > Dateipattern > Tag > Ordner > Obsidian-Standard – bei Ordnerregeln gewinnt die am tiefsten verschachtelte',
        'Debounce-Timeout konfigurierbar, um hektisches Umschalten bei schnellem Notiz-Wechsel zu verhindern',
        'Sichtbare Lock-Icons in Datei-Explorer und Notebook Navigator, plus Quick-Lock direkt aus dem Kontextmenü',
        'Release-Prozess über GitHub Actions und semantic-release, inklusive Beta-Kanal über BRAT für Vorab-Tests',
      ],
      en: [
        'A rule engine with four rule types: frontmatter, file path/regex pattern, tag and folder',
        'A fixed priority order for conflicts: frontmatter > file pattern > tag > folder > Obsidian default — for folder rules, the most deeply nested match wins',
        'A configurable debounce timeout to avoid rapid-fire switching when quickly moving between notes',
        'Visible lock icons in the File Explorer and Notebook Navigator, plus a quick-lock action right from the context menu',
        'A GitHub Actions + semantic-release pipeline, including a beta channel via BRAT for pre-release testing',
      ],
    },
    decisions: {
      de: [
        'Explizite Prioritätsreihenfolge statt "spezifischste Regel gewinnt" – nachvollziehbarer für Nutzer, auch wenn es weniger flexibel ist',
        'Integration mit Notebook Navigator ausschließlich über dessen offizielle Plugin-API (ab v1.2.0) statt über interne Strukturen – stabiler bei Updates, dafür an ältere Navigator-Versionen nicht rückwärtskompatibel',
        'Frontmatter-Schlüssel ist konfigurierbar, damit das Plugin sich an bestehende Vault-Konventionen anpasst statt umgekehrt',
      ],
      en: [
        'An explicit priority order instead of "most specific rule wins" — more predictable for users, even if less flexible in edge cases',
        'Notebook Navigator integration only through its official plugin API (v1.2.0+) rather than internals — more update-stable, at the cost of not supporting older Navigator versions',
        'A configurable frontmatter key, so the plugin adapts to existing vault conventions instead of the other way round',
      ],
    },
    outcome: {
      de: 'Über alle GitHub-Releases hinweg wurden die Plugin-Assets bislang rund {{downloads}} Mal heruntergeladen (Live-Zahl direkt von der GitHub-Releases-API dieser Seite).',
      en: 'Across all GitHub releases, plugin assets have been downloaded roughly {{downloads}} times so far (live number pulled directly from the GitHub releases API on this page).',
    },
    retrospective: {
      de: 'Regeltypen (Frontmatter, Pattern, Tag, Ordner) und die Prioritätslogik sind über mehrere Minor-Releases hinweg gewachsen statt von Anfang an vollständig geplant gewesen zu sein. Im Nachhinein hätte ich das Prioritätsmodell und die Konfigurierbarkeit des Frontmatter-Keys von Release 1.0 an fest eingeplant, statt es schrittweise nachzuziehen.',
      en: "The rule types (frontmatter, pattern, tag, folder) and the priority logic grew across several minor releases rather than being fully designed upfront. In hindsight, I'd have locked in the priority model and the configurable frontmatter key from release 1.0 instead of retrofitting them incrementally.",
    },
  },
  links: [
    {
      label: 'GitHub Repository',
      href: 'https://github.com/LucEast/obsidian-current-view',
    },
    {
      label: 'Releases',
      href: 'https://github.com/LucEast/obsidian-current-view/releases',
    },
    {
      label: 'README',
      href: 'https://github.com/LucEast/obsidian-current-view/blob/main/README.md',
    },
  ],
};
