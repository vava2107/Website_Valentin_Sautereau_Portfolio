// Gestion du multilingue (FR / EN) du portfolio.
// Chaque élément traduisible porte un attribut data-i18n="cle" dont la valeur
// correspond à une clé plate (pas d'imbrication) dans le dictionnaire ci-dessous.
(function () {
    'use strict';

    const translations = {
        fr: {
            'nav.bio': 'Bio',
            'nav.academic': 'Formation',
            'nav.experience': 'Expérience',
            'nav.skills': 'Compétences',
            'nav.projects': 'Projets',
            'nav.interests': 'Intérêts',
            'nav.documents': 'Documents',
            'nav.cv': 'CV',
            'nav.dossier': 'Dossier de compétences',
            'nav.contact': 'Me contacter',

            'hero.badge': 'Ingénieur Systèmes Électroniques Embarqués',
            'hero.desc': 'Apprenti Ingénieur @ <strong>THALES Mérignac</strong>. Profil polyvalent — électronique, mécanique, logiciel — au service de l\'intégration de systèmes embarqués.',
            'hero.dlCv': 'Télécharger mon CV',
            'hero.dlDossier': 'Dossier de compétences',
            'hero.discover': 'Découvrir mon parcours',
            'hero.tag2': 'Intégration Hard/Soft',
            'hero.tag3': 'Simulation temps réel',

            'about.title': 'Présentation <span>Personnelle</span>',
            'about.p1': 'Futur ingénieur diplômé de l\'<strong>ENSEIRB-MATMECA</strong>, fort de 5 ans d\'expérience (Thales, Auckland Bioengineering Institute), je me spécialise dans l\'intégration de systèmes embarqués complexes, au plus près du matériel.',
            'about.p2': 'Ingénieur polyvalent, je conçois et j\'intègre des systèmes complets : <strong>électronique</strong> (conception PCB, routage KiCAD, asservissement), <strong>mécanique</strong> (modélisation Fusion 360, impression 3D) et <strong>logiciel embarqué</strong> (C/C++, Python, LabVIEW) pensé comme un outil au service du matériel, jamais une fin en soi. Cette approche transversale, du prototypage à la validation opérationnelle, me permet de m\'adapter à des projets et secteurs variés, toujours au contact direct du système physique.',
            'about.location': 'Mérignac, 33700',
            'about.license': 'Permis B (véhiculé)',
            'about.english': 'Anglais B2 (TOEIC: 840)',
            'about.dlCv': 'Télécharger le CV',
            'about.dlDossier': 'Télécharger le dossier de compétences',

            'academic.title': 'Parcours <span>Académique</span>',
            'academic.d1.h': 'Ingénieur Systèmes Électroniques Embarqués (SEE)',
            'academic.d1.p': 'Formation d\'ingénieur spécialisée dans le hardware et le software embarqué.',
            'academic.d1.tags': '<span>Traitement du Signal</span><span>Systèmes Embarqués & RTOS</span><span>Architecture Processeurs</span><span>Robotique & ROS</span><span>VHDL / FPGA</span><span>IA & GPU</span><span>Protocoles Réseaux</span><span>Micro-électronique</span>',
            'academic.d2.h': 'DUT GEII (Génie Électrique et Informatique Industrielle)',
            'academic.d2.p': 'Formation technique pluridisciplinaire en électronique et automatique.',
            'academic.d2.tags': '<span>Électronique Analogique</span><span>Automatique & Régulation</span><span>Programmation C/Python</span><span>Électrotechnique</span>',

            'experience.title': 'Expérience <span>Professionnelle</span>',
            'experience.e1.h': 'Ingénieur Intégrateur Systèmes Drone (Alternance)',
            'experience.e1.company': 'THALES Mérignac | 2023 - 2026',
            'experience.e1.list': '<li>Conception d\'un démonstrateur Hardware-in-the-Loop (HIL) pour validation optronique.</li><li>Architecture hard/soft : intégration Teensy 4.1, asservissement PID et moteur pas-à-pas.</li><li>Développement C/C++ : plugins simulateur VBS4 et routage télémétrie temps réel.</li><li>Exploitation flux réseaux (MAVLink, UDP Multicast) pour essais systèmes (IVV).</li>',
            'experience.e2.h': 'Stage Recherche & Développement',
            'experience.e2.company': 'Auckland Bioengineering Institute (Nouvelle-Zélande) | Été 2024',
            'experience.e2.list': '<li>Modification et intégration de cartes de contrôle de pompes.</li><li>Conception et routage PCB sous KiCAD.</li><li>Programmation LabVIEW sur FPGA (pilotage pompes piézoélectriques).</li>',
            'experience.e3.h': 'Technicien Électronique au FABLAB (Alternance)',
            'experience.e3.company': 'THALES Mérignac | 2021 - 2023',
            'experience.e3.list': '<li>Maquettage et prototypage électronique rapide.</li><li>Modélisation, conception et impression 3D.</li><li>Programmation bas niveau.</li>',

            'skills.title': 'Compétences <span>Techniques</span>',
            'skills.s1.h': 'Programmation / Logiciel Embarqué',
            'skills.s1.list': '<li><strong>Langages :</strong> C, C++, VHDL, Python. Développement de prototypes de logiciels embarqués et temps réel.</li><li><strong>Réseaux :</strong> Flux temps réel, UDP Multicast, bus EBUS, MAVLink.</li><li><strong>Simulation & Optronique :</strong> Conduite du projet VBS4 (plugin C++), synchronisation dynamique position/vue, extraction et traitement simultané de flux vidéo Infrarouge (IR) et Visible/Jour.</li>',
            'skills.s2.h': 'Électronique Analogique et Numérique',
            'skills.s2.list': '<li><strong>Hardware :</strong> Spécification systèmes, routage (KiCAD, Eagle, Isis Proteus, Ares).</li><li><strong>Prototypage :</strong> Fabrication de cartes électroniques / utilisation de CNC pour la gravure et découpe. Soudure CMS et composants traversants.</li><li><strong>Test/Validation :</strong> Réalisation d\'essais systèmes, analyse et recherche de pannes sur cartes (oscilloscope, multimètre).</li>',
            'skills.s3.h': 'Mécanique & Démonstrateurs',
            'skills.s3.list': '<li><strong>Système :</strong> Conception et développement d\'un démonstrateur technologique. Support motorisé pour tourelle optronique sur banc, alliant développement logiciel, électronique et mécanique.</li><li><strong>CAO 3D :</strong> Modélisation sur mesure (Fusion360, Onshape, Rhinocéros).</li><li><strong>Fabrication :</strong> Usinage CNC et impression 3D pour prototypage rapide.</li>',
            'skills.s4.h': 'Aptitudes Professionnelles',
            'skills.s4.list': '<li>Autonomie et rigueur</li><li>Esprit d\'équipe et collaboration</li><li>Coordination de projets</li><li>Esprit d\'initiative</li>',

            'projects.title': 'Mes <span>Projets</span>',
            'projects.p1.h': 'Banc HIL Drone & Optronique',
            'projects.p1.p': 'Création d\'un démonstrateur Hardware-in-the-Loop (simulateur tactique VBS4, support motorisé asservi et calcul fauchée via SDL2).',
            'projects.p2.h': 'Traitement Radar (FFT)',
            'projects.p2.p': 'Déploiement de calculs FFT sur AI Engines FPGA (AMD Versal) via MATLAB/Simulink.',
            'projects.p3.h': 'Robotique XARM6',
            'projects.p3.p': 'Développement ROS pour la détection et saisie de pièces avec bras 6 axes et Realsense.',
            'projects.p4.h': 'Design Processeur VHDL',
            'projects.p4.p': 'Architecture complète d\'un processeur (ALU, registres, unité de contrôle).',
            'projects.p5.h': 'Simulation Radio RF',
            'projects.p5.p': 'Modélisation de chaînes GSM/QPSK sous ADS (amplification, filtrage).',
            'projects.p6.h': 'Médiathèque C++',
            'projects.p6.p': 'Gestion multi-utilisateurs avec polymorphisme et persistance des données.',
            'projects.p7.h': 'Chat UNIX en C',
            'projects.p7.p': 'Système client/serveur via tubes (pipes) et signaux UNIX.',

            'interests.title': 'Centres <span>d\'intérêt</span>',
            'interests.i1': 'Sport (Badminton, course à pied, rando, ski, kick-boxing, foot)',
            'interests.i2': 'Nouvelles technologies',
            'interests.i3': 'Bricolage (rénovation, véhicule aménagé, travail du bois)',
            'interests.i4': 'Voyages (Maroc, Nouvelle-Zélande)',

            'contact.title': 'On collabore ?',
            'contact.email': 'M\'envoyer un email',
            'contact.dlCv': 'Télécharger mon CV',
            'contact.dlDossier': 'Télécharger mon dossier de compétences',

            'footer.text': '&copy; 2026 Valentin Sautereau • Ingénieur Systèmes Electroniques Embarqués',

            'meta.title': 'Valentin Sautereau | Ingénieur Système Embarqué',
            'meta.description': 'Portfolio d\'ingénieur en systèmes électroniques embarqués - Alternance Thales Mérignac'
        },
        en: {
            'nav.bio': 'About',
            'nav.academic': 'Education',
            'nav.experience': 'Experience',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.interests': 'Interests',
            'nav.documents': 'Documents',
            'nav.cv': 'CV',
            'nav.dossier': 'Skills portfolio',
            'nav.contact': 'Contact me',

            'hero.badge': 'Embedded Electronic Systems Engineer',
            'hero.desc': 'Engineering apprentice @ <strong>THALES Mérignac</strong>. A versatile profile — electronics, mechanics, software — in service of embedded systems integration.',
            'hero.dlCv': 'Download my CV',
            'hero.dlDossier': 'Skills portfolio',
            'hero.discover': 'Discover my journey',
            'hero.tag2': 'Hardware/Software Integration',
            'hero.tag3': 'Real-time simulation',

            'about.title': 'Personal <span>Presentation</span>',
            'about.p1': 'Soon-to-be graduate engineer from <strong>ENSEIRB-MATMECA</strong>, with 5 years of experience (Thales, Auckland Bioengineering Institute), I specialize in integrating complex embedded systems, working close to the hardware.',
            'about.p2': 'A versatile engineer, I design and integrate complete systems: <strong>electronics</strong> (PCB design, KiCAD routing, control systems), <strong>mechanics</strong> (Fusion 360 modeling, 3D printing) and <strong>embedded software</strong> (C/C++, Python, LabVIEW) built as a tool in service of the hardware, never an end in itself. This cross-disciplinary approach, from prototyping to operational validation, lets me adapt to a wide range of projects and sectors, always in direct contact with the physical system.',
            'about.location': 'Mérignac, France (33700)',
            'about.license': 'Driving licence B (own vehicle)',
            'about.english': 'English B2 (TOEIC: 840)',
            'about.dlCv': 'Download CV',
            'about.dlDossier': 'Download skills portfolio',

            'academic.title': 'Academic <span>Background</span>',
            'academic.d1.h': 'Embedded Electronic Systems Engineer (SEE)',
            'academic.d1.p': 'Engineering program specialized in embedded hardware and software.',
            'academic.d1.tags': '<span>Signal Processing</span><span>Embedded Systems & RTOS</span><span>Processor Architecture</span><span>Robotics & ROS</span><span>VHDL / FPGA</span><span>AI & GPU</span><span>Network Protocols</span><span>Microelectronics</span>',
            'academic.d2.h': 'GEII Associate Degree (Electrical & Industrial Computer Engineering)',
            'academic.d2.p': 'Multidisciplinary technical program in electronics and automation.',
            'academic.d2.tags': '<span>Analog Electronics</span><span>Control & Automation</span><span>C/Python Programming</span><span>Electrical Engineering</span>',

            'experience.title': 'Professional <span>Experience</span>',
            'experience.e1.h': 'Drone Systems Integration Engineer (Work-Study)',
            'experience.e1.company': 'THALES Mérignac | 2023 - 2026',
            'experience.e1.list': '<li>Design of a Hardware-in-the-Loop (HIL) demonstrator for optronic validation.</li><li>Hardware/software architecture: Teensy 4.1 integration, PID control loop and stepper motor.</li><li>C/C++ development: VBS4 simulator plugins and real-time telemetry routing.</li><li>Operation of network flows (MAVLink, UDP Multicast) for system testing (V&V).</li>',
            'experience.e2.h': 'Research & Development Internship',
            'experience.e2.company': 'Auckland Bioengineering Institute (New Zealand) | Summer 2024',
            'experience.e2.list': '<li>Modification and integration of pump control boards.</li><li>PCB design and routing under KiCAD.</li><li>LabVIEW programming on FPGA (piezoelectric pump control).</li>',
            'experience.e3.h': 'Electronics Technician at the FABLAB (Work-Study)',
            'experience.e3.company': 'THALES Mérignac | 2021 - 2023',
            'experience.e3.list': '<li>Rapid electronic prototyping and mock-ups.</li><li>3D modeling, design and printing.</li><li>Low-level programming.</li>',

            'skills.title': 'Technical <span>Skills</span>',
            'skills.s1.h': 'Programming / Embedded Software',
            'skills.s1.list': '<li><strong>Languages:</strong> C, C++, VHDL, Python. Development of embedded and real-time software prototypes.</li><li><strong>Networks:</strong> Real-time data flow, UDP Multicast, EBUS bus, MAVLink.</li><li><strong>Simulation & Optronics:</strong> Led the VBS4 project (C++ plugin), dynamic position/view synchronization, simultaneous extraction and processing of Infrared (IR) and Visible/Day video streams.</li>',
            'skills.s2.h': 'Analog & Digital Electronics',
            'skills.s2.list': '<li><strong>Hardware:</strong> System specification, routing (KiCAD, Eagle, Isis Proteus, Ares).</li><li><strong>Prototyping:</strong> Manufacturing of electronic boards / use of CNC for engraving and cutting. SMD and through-hole component soldering.</li><li><strong>Test/Validation:</strong> System testing, fault analysis and troubleshooting on boards (oscilloscope, multimeter).</li>',
            'skills.s3.h': 'Mechanics & Demonstrators',
            'skills.s3.list': '<li><strong>System:</strong> Design and development of a technology demonstrator. Motorized mount for an optronic turret on a test bench, combining software, electronics and mechanical development.</li><li><strong>3D CAD:</strong> Custom modeling (Fusion360, Onshape, Rhinoceros).</li><li><strong>Manufacturing:</strong> CNC machining and 3D printing for rapid prototyping.</li>',
            'skills.s4.h': 'Professional Skills',
            'skills.s4.list': '<li>Autonomy and rigor</li><li>Team spirit and collaboration</li><li>Project coordination</li><li>Initiative</li>',

            'projects.title': 'My <span>Projects</span>',
            'projects.p1.h': 'HIL Drone & Optronics Test Bench',
            'projects.p1.p': 'Creation of a Hardware-in-the-Loop demonstrator (VBS4 tactical simulator, servo-controlled motorized mount and swath calculation via SDL2).',
            'projects.p2.h': 'Radar Signal Processing (FFT)',
            'projects.p2.p': 'Deployment of FFT computations on FPGA AI Engines (AMD Versal) via MATLAB/Simulink.',
            'projects.p3.h': 'XARM6 Robotics',
            'projects.p3.p': 'ROS development for part detection and grasping with a 6-axis robotic arm and Realsense camera.',
            'projects.p4.h': 'VHDL Processor Design',
            'projects.p4.p': 'Full processor architecture (ALU, registers, control unit).',
            'projects.p5.h': 'RF Radio Simulation',
            'projects.p5.p': 'GSM/QPSK chain modeling under ADS (amplification, filtering).',
            'projects.p6.h': 'C++ Media Library',
            'projects.p6.p': 'Multi-user management with polymorphism and data persistence.',
            'projects.p7.h': 'UNIX Chat in C',
            'projects.p7.p': 'Client/server system using UNIX pipes and signals.',

            'interests.title': 'Personal <span>Interests</span>',
            'interests.i1': 'Sports (badminton, running, hiking, skiing, kick-boxing, football)',
            'interests.i2': 'New technologies',
            'interests.i3': 'DIY (renovation, van conversion, woodworking)',
            'interests.i4': 'Travel (Morocco, New Zealand)',

            'contact.title': "Let's work together?",
            'contact.email': 'Send me an email',
            'contact.dlCv': 'Download my CV',
            'contact.dlDossier': 'Download my skills portfolio',

            'footer.text': '&copy; 2026 Valentin Sautereau • Embedded Electronic Systems Engineer',

            'meta.title': 'Valentin Sautereau | Embedded Systems Engineer',
            'meta.description': 'Portfolio of an embedded electronic systems engineer - Work-study program at Thales Mérignac'
        }
    };

    const STORAGE_KEY = 'portfolio-lang';

    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.documentElement.setAttribute('lang', lang);

        if (dict['meta.title']) {
            document.title = dict['meta.title'];
        }
        const descEl = document.getElementById('page-description');
        if (descEl && dict['meta.description']) {
            descEl.setAttribute('content', dict['meta.description']);
        }

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

        // Les icônes Lucide ne sont pas recréées ici : elles vivent en dehors
        // des éléments data-i18n (icône en frère du <span> traduit).
    }

    document.addEventListener('DOMContentLoaded', () => {
        let saved = 'fr';
        try { saved = localStorage.getItem(STORAGE_KEY) || 'fr'; } catch (e) { /* ignore */ }

        if (saved !== 'fr') {
            applyLanguage(saved);
        } else {
            // Assure la cohérence des états (bouton actif, attribut lang) même sans changement.
            document.documentElement.setAttribute('lang', 'fr');
        }

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
        });
    });
})();
