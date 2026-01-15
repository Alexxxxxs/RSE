// === DONNÉES DU QUESTIONNAIRE ===
const steps = [
    {
        id: 'intro',
        title: 'Informations Générales',
        questions: [
            { id: 'q1', text: "Secteur d'activité", type: 'select', options: ['BTP / Génie Civil', 'Tourisme / Hôtellerie', 'Agroalimentaire / Bio', 'Services / Numérique', 'Commerce / Artisanat'] },
            { id: 'q2', text: "Taille de l'entreprise", type: 'select', options: ['TPE (1-10)', 'PME (11-250)', 'ETI (+250)'] },
            { id: 'q3', text: "Implantation principale", type: 'select', options: ['Zone Urbaine', 'Zone Rurale', 'Montagne', 'Littoral'] },
            { id: 'q4', text: "Saisonnalité de l'activité", type: 'radio', options: ['Oui', 'Non'] }
        ]
    },
    {
        id: 'sante',
        title: 'Axe 1 : Santé des Salariés',
        questions: [
            { id: 'q5', text: "Actions de prévention santé mises en place ?", type: 'radio_score' },
            { id: 'q6', text: "Facilitation de l'accès aux soins (horaires, téléconsultation) ?", type: 'radio_score' },
            { id: 'q7', text: "Solutions pour la santé mentale (stress, déconnexion) ?", type: 'radio_score' },
            { id: 'sante_eval', text: "Auto-évaluation Santé :", type: 'rating' }
        ]
    },
    {
        id: 'qvt',
        title: 'Axe 2 : Qualité de Vie au Travail',
        questions: [
            { id: 'q10', text: "Évaluation du bien-être au travail ?", type: 'radio_score' },
            { id: 'q11', text: "Adaptation de la charge à la saisonnalité ?", type: 'radio_score' },
            { id: 'q12', text: "Prévention des risques psychosociaux ?", type: 'radio_score' },
            { id: 'qvt_eval', text: "Auto-évaluation QVT :", type: 'rating' }
        ]
    },
    {
        id: 'env',
        title: 'Axe 3 : Environnement',
        questions: [
            { id: 'q15', text: "Identification des impacts (déchets, énergie) ?", type: 'radio_score' },
            { id: 'q16', text: "Mise en place d'éco-gestes simples ?", type: 'radio_score' },
            { id: 'q17', text: "Réduction du papier / dématérialisation ?", type: 'radio_score' },
            { id: 'env_eval', text: "Auto-évaluation Environnement :", type: 'rating' }
        ]
    },
    {
        id: 'local',
        title: 'Axe 4 : Développement Local',
        questions: [
            { id: 'q21', text: "Fournisseurs locaux corses privilégiés ?", type: 'radio_score' },
            { id: 'q22', text: "Soutien d'initiatives locales (asso, sport) ?", type: 'radio_score' },
            { id: 'q25', text: "Communication sur vos engagements ?", type: 'radio_score' },
            { id: 'local_eval', text: "Auto-évaluation Local :", type: 'rating' }
        ]
    },
    {
        id: 'synthese',
        title: 'Synthèse',
        questions: [
            { id: 'q26', text: "Priorité 2024 ?", type: 'select', options: ['Santé', 'QVT', 'Environnement', 'Local'] }
        ]
    }
];

// === DONNÉES DES SOLUTIONS ===
const solutionsData = {
    "Santé & Prévention": [
        "<strong>Désigner un référent santé :</strong> Une personne identifiée pour relayer les infos et coordonner les actions.",
        "<strong>1 action prévention / trimestre :</strong> Atelier posture, affiche sur la fatigue ou chaleur.",
        "<strong>Faciliter l'accès aux soins :</strong> Aménager les horaires pour les RDV médicaux des salariés.",
        "<strong>Santé mentale :</strong> Rappeler le droit à la déconnexion et relayer les dispositifs d'écoute."
    ],
    "Qualité de Vie au Travail": [
        "<strong>Mesurer le ressenti :</strong> Un questionnaire anonyme simple (10 questions) 1 fois par an.",
        "<strong>Saisonnalité :</strong> Anticiper les surcharges et ajuster les horaires en haute saison.",
        "<strong>Dialogue :</strong> Mettre en place une réunion courte mensuelle ou un point d'écoute.",
        "<strong>Inclusion :</strong> Maintenir le lien en cas d'arrêt long et adapter les postes."
    ],
    "Environnement": [
        "<strong>Zéro Papier :</strong> Passer aux factures numériques et imprimer seulement si nécessaire.",
        "<strong>Éco-gestes visibles :</strong> Éteindre les équipements le soir, installer le tri sélectif.",
        "<strong>Mobilité :</strong> Encourager le covoiturage et regrouper les déplacements professionnels.",
        "<strong>Image locale :</strong> Sensibiliser à la gestion des déchets en zone touristique."
    ],
    "Développement Local": [
        "<strong>Achats Responsables :</strong> Comparer et favoriser les fournisseurs corses à qualité égale.",
        "<strong>Solidarité :</strong> Soutenir une association ou un événement local (même modestement).",
        "<strong>Savoir-faire :</strong> Utiliser ou offrir des produits corses dans l'entreprise.",
        "<strong>Faire savoir :</strong> Afficher vos actions sur votre site web ou dans vos locaux."
    ]
};
