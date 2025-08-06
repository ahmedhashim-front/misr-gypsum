import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';

// 🟢 سجل عناصر Swiper قبل تشغيل التطبيق
registerSwiperElements();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)

);
