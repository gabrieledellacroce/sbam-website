// Firebase Configuration
// Sostituire questi valori con quelli del vostro progetto Firebase

// Avoid redeclaration in SPA navigation
if (typeof window.firebaseConfig === 'undefined') {
    window.firebaseConfig = {
        apiKey: "AIzaSyBP_XcyPkItkYgNA9SjqlzPbMKPv7nMF_4",
        authDomain: "sbam-92c62.firebaseapp.com",
        projectId: "sbam-92c62",
        storageBucket: "sbam-92c62.firebasestorage.app",
        messagingSenderId: "895622966491",
        appId: "1:895622966491:web:3a9d85004da27242a630fe",
        measurementId: "G-8BYZ3DPETG"
    };
    
    // Initialize Firebase only once
    if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
        firebase.initializeApp(window.firebaseConfig);
        console.log('Firebase initialized successfully');
    }
}

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
    module.exports = window.firebaseConfig;
}