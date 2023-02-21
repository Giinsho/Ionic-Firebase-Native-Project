

importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyBOr43cV4lCOLAS9_xfWhmaFVdGf-S844w",
    authDomain: "reactprojekt-79daf.firebaseapp.com",
    databaseURL: "https://reactprojekt-79daf-default-rtdb.firebaseio.com",
    projectId: "reactprojekt-79daf",
    storageBucket: "reactprojekt-79daf.appspot.com",
    messagingSenderId: "1061961086010",
    appId: "1:1061961086010:web:bb1475e8b69ec7ad02b103",
    measurementId: "G-QS8Y9DXZV9",
    generatedVapidKey: "BCkd5ANwQoahbkRLAjqcAoeN5vJXLKHqvuhfi_MV4C4E030d0UObBu0R6Bi9DA5QcGg82crlVceTv8dk8qQ9je4",
};



firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(notificationTitle,
        notificationOptions);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
    });
}