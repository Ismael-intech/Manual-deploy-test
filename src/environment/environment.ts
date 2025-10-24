import { UserType } from '@core/enums/user-type.enum';

const devHosts = ['localhost', 'embedded-colsan-test.web.app', '192.168.100.3'];
export const isInDev =
  devHosts.indexOf(window.location.hostname) > -1 || window.location.hostname.includes('embedded-colsan-test');

export const environment = {
  firebase: {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  },
  testUser: UserType.SUPERVISOR,
  intechApiUrl: process.env.INTECH_API_URL,
  useTestUser: JSON.parse(process.env.USE_TEST_USER),
  showBadge: false,
  apiUrl: process.env.API_URL,
  skipValidation: JSON.parse(process.env.SKIP_VALIDATION),
  legacyUrl: process.env.LEGACY_URL,
  version: '1.3.0',
  vapidKey: process.env.VAPID_PUBLIC_KEY,
  doneTasksApiUrl: process.env.DONE_TASKS_API_URL,
  doneTasksProjectId: process.env.DONE_TASKS_PROJECT_ID
};
