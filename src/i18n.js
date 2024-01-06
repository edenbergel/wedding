import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    he: {
        translation: {
            "passwordTitle": "מרחב אישי",
            "passwordSubtitle": "הכנס את הסיסמא",
            "passwordPlaceholder": "סיסמ",
            "passwordEnter": "להיכנס",
            "passwordError": "סיסמה לא תקינה",
            "landingTitle": "לאורחים היקרים {{lineBreak}} שלנו",
            "landingButton": "לְגַלוֹת",
            "invitationButton": "הזמנה",
            "nextButton": "הבא",
            "inviteTitle": "",
            "formFirstName": "שם פרטי",
            "formLastName": "שם משפחה",
            "formPresenceQuestion": "האם ניתן לסמוך על נוכחותך?",
            "formPresenceYes": "כן",
            "formPresenceNo": "לא",
            "formQtyQuestion": "כמה אנשים יגיעו?",
            "formSendButton": "שלח",
            "error": "מלא את כל השדות",
            "formSuccessTitle": "תודה על התשובה שלך",
            "formSuccessNote": "With love",
            "headerButton": "תפריט",
            "eventsNavItem": "אירועים",
            "invitationNavItem": "הזמנה",
            "rsvpNavItem": "אישור הגעה",
            "hebrew": "HE",
            "french": "FR",
            "dudeName": "ירמיהו",
            "and": "",
            "queenName": "והודיה"
        }
    },
    fr: {
        translation: {
            "passwordTitle": "Espace privé",
            "passwordSubtitle": "Entrez le mot de passe",
            "passwordPlaceholder": "Mot de passe",
            "passwordEnter": "entrer",
            "passwordError": "Mot de passe invalide",
            "landingTitle": "Pour nos {{lineBreak}} chers invités",
            "landingButton": "Découvrir",
            "invitationButton": "Invitation",
            "nextButton": "suivant",
            "inviteTitle": "",
            "formFirstName": "Prénom",
            "formLastName": "Nom",
            "formPresenceQuestion": "Peut-on compter sur votre présence ?",
            "formPresenceYes": "Oui",
            "formPresenceNo": "Non",
            "formQtyQuestion": "Combien êtes-vous ?",
            "formSendButton": "Envoyer",
            "error": "Remplissez tous les champs",
            "formSuccessTitle": "Merci pour votre réponse",
            "formSuccessNote": "With love",
            "headerButton": "menu",
            "eventsNavItem": "Évènements",
            "invitationNavItem": "Invitation",
            "rsvpNavItem": "Rsvp",
            "hebrew": "HE",
            "french": "FR",
            "dudeName": "Jérémie",
            "and": "&",
            "queenName": "Hodaya"
        }
    }
};

i18n
.use(initReactI18next)
.init(
    {
        resources,
        lng: "fr",
        interpolation: {
            escapeValue: false
        }
    }
);

export default i18n;