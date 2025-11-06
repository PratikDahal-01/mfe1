import { initFederation } from '@angular-architects/module-federation';

initFederation()
  .then(x => import('./bootstrap'))
  .catch(err => console.error(err));
