// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBQGiAPkf2IRdQyIrjZVKZy9mpLmXMvDUg",
    authDomain: "justin-overview.firebaseapp.com",
    databaseURL: "https://justin-overview.firebaseio.com",
    projectId: "justin-overview",
    storageBucket: "justin-overview.appspot.com",
    messagingSenderId: "172144790388"
  },
  sendGridAPI_KEY: "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"
};
