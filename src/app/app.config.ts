import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// ✅ هنا بنحدد المسار الجديد داخل public
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/il82/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(withFetch()),

    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-top-center',
        toastClass: 'ngx-toastr custom-toast', // كلاس مخصص نتحكم فيه يدويًا
        closeButton: true,
        progressBar: true,
        timeOut: 5000,
      })
    ),
    // ✅ تفعيل ngx-translate مع المسار الجديد
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
