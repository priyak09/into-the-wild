import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // document.body.onmousemove = function(e) {
  //   document.documentElement.style.setProperty (
  //     '--x', (
  //       e.clientX+window.scrollX
  //     )
  //     + 'px'
  //   );
  //   document.documentElement.style.setProperty (
  //     '--y', (
  //       e.clientY+window.scrollY
  //     ) 
  //     + 'px'
  //   );
  // }