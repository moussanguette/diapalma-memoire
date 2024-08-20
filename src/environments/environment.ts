// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,

  firebase : {
    apiKey: "AIzaSyDZ6ZT8Q_chJWBJ-5cgf4rosSlfLm6DPNI",
    authDomain: "reservation-billets.firebaseapp.com",
    projectId: "reservation-billets",
    storageBucket: "reservation-billets.appspot.com",
    messagingSenderId: "538342363781",
    appId: "1:538342363781:web:95ea62ee7d70157e8f8fec"
/*
    {
      "projectId":"reservation-billets",
      "appId":"1:538342363781:web:95ea62ee7d70157e8f8fec",
      "storageBucket":"reservation-billets.appspot.com",
      "locationId":"us-central",
      "apiKey":"AIzaSyDZ6ZT8Q_chJWBJ-5cgf4rosSlfLm6DPNI",
      "authDomain":"reservation-billets.firebaseapp.com",
      "messagingSenderId":"538342363781"
    }
  */
  }
 

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
