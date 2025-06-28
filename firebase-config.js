// Firebase Configuration
// Sostituire questi valori con quelli del vostro progetto Firebase

const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456789"
};

// Istruzioni per configurare Firebase:
// 1. Andare su https://console.firebase.google.com/
// 2. Creare un nuovo progetto o selezionarne uno esistente
// 3. Aggiungere un'app web al progetto
// 4. Copiare la configurazione e sostituire i valori sopra
// 5. Abilitare Authentication > Sign-in method > Email/Password
// 6. Abilitare Firestore Database
// 7. Configurare le regole di sicurezza per Firestore:

/*
Regole Firestore consigliate:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Other collections can be added here with appropriate rules
  }
}
*/

// Esportare la configurazione se si usa un bundler
if (typeof module !== 'undefined' && module.exports) {
    module.exports = firebaseConfig;
}