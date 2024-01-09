import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    he: {
        translation: {
            "passwordTitle": "מרחב אישי",
            "passwordSubtitle": "הכנס סיסמא",
            "passwordPlaceholder": "סיסמא",
            "passwordEnter": "כניסה",
            "passwordError": "הסיסמה לא תקינה",
            "landingTitle": "לאורחים היקרים {{lineBreak}} שלנו",
            "landingButton": "המשך",
            "invitationButton": "הזמנה",
            "nextButton": "הבא",
            "inviteTitle": "כל ששון וכל שמחה, כל חתן וכל כלה",
            "formFirstName": "שם פרטי",
            "formLastName": "שם משפחה",
            "formPresenceQuestion": "?אפשר לסמוך עליך שתגיע",
            "formPresenceYes": "כן",
            "formPresenceNo": "לא",
            "formQtyQuestion": "?כמה אנשים יגיעו",
            "formSendButton": "שלח",
            "error": "לא מילאת את כל השדות",
            "formSuccessTitle": "תודה על תשובתך",
            "formSuccessSubTitle": "מתרגשים לראותכם",
            "formSuccessNote": "With love",
            "headerButton": "תפריט",
            "eventsNavItem": "האירוע",
            "invitationNavItem": "הזמנה",
            "rsvpNavItem": "אישור הגעה",
            "hebrew": "HE",
            "french": "FR",
            "dudeName": "גרמי יעקב",
            "and": "&",
            "queenName": "הודיה",
            "inviteIntro": "אנו שמחים ונרגשים להזמינכם לחגוג עימנו את יום נישאנו",
            "the": "שיערך אי״ה",
            "weekday": "ביום שלישי א׳ בניסן התשפ״ד",
            "day": "9",
            "month": "אפריל",
            "year": "2024",
            "at": "ב",
            "time": "17",
            "hour": ":",
            "minute": "00",
            "inviteAddress": "אולם ״הגבעה״ , קיבוץ גבעת ברנר",
            "inviteConfirm": "נא לאשר את הגעתך",
            "rsvpButton": "אישור הגעה"
        }
    },
    fr: {
        translation: {
            "passwordTitle": "Espace privé",
            "passwordSubtitle": "Entrez le mot de passe",
            "passwordPlaceholder": "Mot de passe",
            "passwordEnter": "entrer",
            "passwordError": "Mot de passe invalide",
            "landingTitle": "Chère famille, chers amis",
            "landingButton": "Découvrir",
            "invitationButton": "Invitation",
            "nextButton": "suivant",
            "inviteTitle": "כל ששון וכל שמחה, כל חתן וכל כלה",
            "formFirstName": "Prénom",
            "formLastName": "Nom",
            "formPresenceQuestion": "Peut-on compter sur votre présence ?",
            "formPresenceYes": "Oui",
            "formPresenceNo": "Non",
            "formQtyQuestion": "Combien êtes-vous ?",
            "formSendButton": "Envoyer",
            "error": "Remplissez tous les champs",
            "formSuccessTitle": "Merci pour votre réponse",
            "formSuccessSubTitle": "Nous avons hâte de vous voir",
            "formSuccessNote": "With love",
            "headerButton": "menu",
            "eventsNavItem": "Évènements",
            "invitationNavItem": "Invitation",
            "rsvpNavItem": "Rsvp",
            "hebrew": "HE",
            "french": "FR",
            "dudeName": "Jérémie",
            "and": "&",
            "queenName": "Hodaya",
            "inviteIntro": "ont la joie de vous faire part du mariage {{lineBreak}} de leurs petits-enfants et enfants",
            "the": "le",
            "weekday": "Mardi",
            "day": "9",
            "month": "Avril",
            "year": "2024",
            "at": "à",
            "time": "17",
            "hour": "h",
            "minute": "00",
            "inviteAddress": "HaGiva, Kibboutz Givat Brenner, Israël",
            "inviteConfirm": "Merci de confirmer votre présence",
            "rsvpButton": "RSVP"
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