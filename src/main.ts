import { initFederation } from '@angular-architects/module-federation';

initFederation({
  remoteType: 'module',
  remoteEntry: 'http://localhost:4200/remoteEntry.js',
  remoteName: 'mfe1',
  exposedModule: './LoginModule'
})
  .then(x => import('./bootstrap'))
  .catch(err => console.error(err));
