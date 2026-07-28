import type { CaseStudyContent } from './types';

export const rkeasyCaseStudy: CaseStudyContent = {
  title: 'RKEasy',
  subtitle: {
    de: 'Reproduzierbare RKE2-Kubernetes-Cluster über Bare Metal, vSphere, OpenStack und Cloud hinweg, automatisiert mit Ansible.',
    en: 'Reproducible RKE2 Kubernetes clusters across bare metal, vSphere, OpenStack and cloud, automated with Ansible.',
  },
  tags: ['Ansible', 'RKE2', 'Kubernetes', 'IaC'],
  sections: {
    problem: {
      de: 'RKE2-Cluster von Hand oder mit Ad-hoc-Skripten pro Umgebung aufzusetzen ist fehleranfällig und schwer reproduzierbar – jede Infrastruktur (Bare Metal, vSphere, OpenStack, Cloud) bekommt am Ende ihre eigene, leicht abweichende Vorgehensweise, was Wartung und Konsistenz über mehrere Cluster hinweg erschwert.',
      en: 'Setting up RKE2 clusters by hand or with ad-hoc scripts per environment is error-prone and hard to reproduce — every infrastructure target (bare metal, vSphere, OpenStack, cloud) ends up with its own slightly different process, which makes maintaining consistency across multiple clusters harder than it needs to be.',
    },
    context: {
      de: 'Open-Source-Projekt, inspiriert von Kubespray, komplett auf Ansible-Playbooks aufgebaut. Muss unterschiedliche Infrastruktur-Backends unterstützen (Bare Metal, vSphere, OpenStack, AWS und weitere) und dabei für unterschiedliche Linux-Distributionen funktionieren.',
      en: 'An open-source project, inspired by Kubespray, built entirely on Ansible playbooks. Needs to support multiple infrastructure backends (bare metal, vSphere, OpenStack, AWS and more) while working across different Linux distributions.',
    },
    responsibility: {
      de: 'Alleiniger Autor: Design der Playbook- und Inventory-Struktur, Implementierung, Dokumentation und laufende Weiterentwicklung.',
      en: 'Sole author: designed the playbook and inventory structure, implemented it, wrote the documentation and continue to maintain it.',
    },
    approach: {
      de: [
        'Inventory-getriebene Konfiguration: `inventory/sample` wird pro Cluster kopiert (z.B. `inventory/mycluster`) und über `group_vars` angepasst',
        'Getrennte Playbooks für Aufbau (`deploy_cluster.yml`) und Rückbau (`remove_cluster.yml`) eines Clusters',
        'Konfigurierbare Node-Rollen (Control-Plane/Worker), Pod-/Service-Netzwerk und Storage-Backend (z.B. Longhorn) pro Inventory',
        'Nutzt `ansible.utils` als Collection-Abhängigkeit für konsistente Netzwerk-/Datenverarbeitung über Playbooks hinweg',
      ],
      en: [
        'Inventory-driven configuration: `inventory/sample` gets copied per cluster (e.g. `inventory/mycluster`) and customized via `group_vars`',
        'Separate playbooks for standing a cluster up (`deploy_cluster.yml`) and tearing it down (`remove_cluster.yml`)',
        'Configurable node roles (control-plane/worker), pod/service networking and storage backend (e.g. Longhorn) per inventory',
        'Uses the `ansible.utils` collection as a dependency for consistent networking/data handling across playbooks',
      ],
    },
    decisions: {
      de: [
        'Ansible statt eigenem CLI-Tool oder Operator – agentless, breit bekanntes Werkzeug, passt zum bestehenden Ops-Workflow; dafür weniger abstrahiert als eine dedizierte Steuerungsebene',
        'Eigenes Inventory-Verzeichnis pro Cluster statt einer gemeinsamen Konfiguration – hält Cluster strikt isoliert und reproduzierbar, auf Kosten von etwas mehr Duplikation zwischen Inventories',
        'Unterstützung mehrerer Infrastruktur-Backends über Ansibles Inventory-/Plugin-Flexibilität statt festverdrahteter Provider-Logik',
      ],
      en: [
        "Ansible instead of a custom CLI or operator — agentless, widely known, fits an existing ops workflow; the trade-off is less abstraction than a dedicated control layer would give",
        'A dedicated inventory directory per cluster instead of one shared config — keeps clusters strictly isolated and reproducible, at the cost of some duplication between inventories',
        "Multi-infrastructure support built on Ansible's inventory/plugin flexibility rather than hardcoded provider logic",
      ],
    },
    outcome: {
      de: 'Unterstützt heute HA-Cluster-Aufbau über Bare Metal, vSphere, OpenStack und mehrere Cloud-Umgebungen hinweg mit derselben Playbook-Basis. Auf der Roadmap stehen u.a. weitere Cloud-Provider sowie eingebautes Monitoring/Logging/Security-Tooling.',
      en: 'Today it supports HA cluster deployment across bare metal, vSphere, OpenStack and several cloud environments on the same playbook base. The roadmap includes further cloud providers as well as built-in monitoring/logging/security tooling.',
    },
    retrospective: {
      de: 'Automatisierte Tests für die Playbooks (z.B. mit Molecule) und ein schlankerer CLI-Wrapper um die rohen `ansible-playbook`-Aufrufe herum stehen noch aus – die würde ich heute früher einbauen, um den Einstieg für andere Nutzer:innen leichter zu machen.',
      en: "Automated testing for the playbooks (e.g. with Molecule) and a thinner CLI wrapper around the raw `ansible-playbook` invocations are still missing — I'd build those in earlier today to make onboarding easier for other users.",
    },
  },
  links: [
    { label: 'GitHub Repository', href: 'https://github.com/LucEast/RKEasy' },
    {
      label: 'README',
      href: 'https://github.com/LucEast/RKEasy/blob/main/README.md',
    },
  ],
};
