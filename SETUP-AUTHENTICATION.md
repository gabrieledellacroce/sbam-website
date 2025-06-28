# Setup Autenticazione Utenti SBAM

Questo documento spiega come configurare il sistema di registrazione e login utenti per il sito SBAM.

## 🔥 Configurazione Firebase

### 1. Creare un progetto Firebase

1. Andare su [Firebase Console](https://console.firebase.google.com/)
2. Cliccare su "Crea un progetto" o selezionare un progetto esistente
3. Seguire la procedura guidata per creare il progetto

### 2. Aggiungere un'app Web

1. Nel dashboard del progetto, cliccare sull'icona "</>"
2. Registrare l'app con un nome (es. "SBAM Website")
3. Copiare la configurazione Firebase che appare

### 3. Configurare Authentication

1. Nel menu laterale, andare su **Authentication**
2. Cliccare su **Get started**
3. Andare nella tab **Sign-in method**
4. Abilitare **Email/Password**
5. Salvare le modifiche

### 4. Configurare Firestore Database

1. Nel menu laterale, andare su **Firestore Database**
2. Cliccare su **Create database**
3. Scegliere **Start in test mode** (per ora)
4. Selezionare una location vicina (es. europe-west3)

### 5. Configurare le regole di sicurezza

Andare su **Firestore Database > Rules** e sostituire con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Gli utenti possono leggere e scrivere solo i propri documenti
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🔧 Configurazione del Codice

### 1. Aggiornare la configurazione Firebase

Nel file `index.html`, trovare la sezione con `firebaseConfig` e sostituire con i valori del vostro progetto:

```javascript
const firebaseConfig = {
    apiKey: "la-vostra-api-key",
    authDomain: "vostro-progetto.firebaseapp.com",
    projectId: "vostro-progetto-id",
    storageBucket: "vostro-progetto.appspot.com",
    messagingSenderId: "123456789",
    appId: "la-vostra-app-id"
};
```

### 2. Testare il sistema

1. Aprire `index.html` in un browser
2. Cliccare su "Sign Up" per registrare un nuovo utente
3. Compilare il form di registrazione
4. Verificare che l'utente sia stato creato in Firebase Console

## ✨ Funzionalità Implementate

### Registrazione Utenti
- ✅ Form di registrazione con validazione
- ✅ Creazione account Firebase Auth
- ✅ Salvataggio dati aggiuntivi in Firestore
- ✅ Invio email di verifica
- ✅ Validazione password (minimo 8 caratteri)
- ✅ Conferma password

### Login Utenti
- ✅ Form di login
- ✅ Autenticazione con email/password
- ✅ Gestione errori
- ✅ Remember me (gestito da Firebase)
- ✅ Reset password

### Gestione Stato Utente
- ✅ Rilevamento automatico stato login
- ✅ Aggiornamento UI in base allo stato
- ✅ Dashboard utente con informazioni
- ✅ Logout

### UI/UX
- ✅ Modal responsive per login/registrazione
- ✅ Animazioni e transizioni
- ✅ Gestione mobile menu
- ✅ Feedback visivo per azioni
- ✅ Modal di successo

## 🔒 Sicurezza

### Regole Firestore
Le regole implementate garantiscono che:
- Solo utenti autenticati possano accedere ai dati
- Ogni utente può accedere solo ai propri dati
- Nessun accesso anonimo ai dati sensibili

### Validazione Frontend
- Validazione email format
- Controllo lunghezza password
- Conferma password
- Sanitizzazione input

### Best Practices
- Password non salvate in chiaro
- Gestione errori senza esporre informazioni sensibili
- Email verification obbligatoria
- Session management automatica

## 🚀 Prossimi Passi

### Funzionalità da Implementare
1. **Dashboard Utente Completa**
   - Gestione profilo
   - Cambio password
   - Gestione preferenze

2. **Integrazione con SBAM Algorithm**
   - API per accesso algoritmo
   - Dashboard analytics
   - Gestione progetti SEO

3. **Sistema di Pagamenti**
   - Integrazione Stripe
   - Gestione abbonamenti
   - Fatturazione

4. **Funzionalità Avanzate**
   - Login social (Google, LinkedIn)
   - Two-factor authentication
   - Team management

## 🐛 Troubleshooting

### Errori Comuni

**"Firebase not defined"**
- Verificare che i CDN Firebase siano caricati correttamente
- Controllare la connessione internet

**"Permission denied"**
- Verificare le regole Firestore
- Controllare che l'utente sia autenticato

**"Invalid API key"**
- Verificare la configurazione Firebase
- Controllare che il dominio sia autorizzato

### Debug

Per debug, aprire la console del browser (F12) e verificare:
- Errori JavaScript
- Richieste di rete
- Stato autenticazione Firebase

## 📞 Supporto

Per problemi o domande:
1. Controllare la documentazione Firebase
2. Verificare la console del browser per errori
3. Consultare i log di Firebase Console

---

**Nota**: Questo sistema è pronto per la produzione ma richiede la configurazione corretta di Firebase e l'implementazione delle funzionalità backend specifiche per SBAM.