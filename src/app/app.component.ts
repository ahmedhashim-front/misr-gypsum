import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, inject, PLATFORM_ID, effect } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

// ✅ Layout Components
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// ✅ Theme Service
import { ThemeService } from './core/services/theme/theme.service';
// ✅ Flowbite Service
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { Router } from 'express';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private titleService = inject(Title);
  private flowbiteService = inject(FlowbiteService);
  private themeService = inject(ThemeService);
  // private router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    const isBrowser = isPlatformBrowser(this.platformId);

    // ✅ تهيئة Flowbite بعد تفاعل المستخدم (توفيرًا للأداء)
    if (isBrowser) {
      const startLoading = () => {
        this.flowbiteService.loadFlowbite(() => initFlowbite());
        window.removeEventListener('mousemove', startLoading);
        window.removeEventListener('scroll', startLoading);
      };
      window.addEventListener('mousemove', startLoading);
      window.addEventListener('scroll', startLoading);
    }

    // ✅ اللغة
    let selectedLang = 'en';
    if (isBrowser) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) selectedLang = savedLang;
    }

    this.translate.setDefaultLang('en');
    this.translate.use(selectedLang).subscribe(() => {
      // ✅ تحديث لغة واتجاه الصفحة
      if (isBrowser) {
        document.documentElement.setAttribute('lang', selectedLang);
        document.documentElement.setAttribute(
          'dir',
          selectedLang === 'ar' ? 'rtl' : 'ltr'
        );
      }

      // ✅ عنوان الصفحة
      this.titleService.setTitle('Misr Investment Co');

      // ✅ Meta Tags الأساسية
      this.meta.updateTag({
        name: 'description',
        content:
          'شركة مصر للجبس تقدم حلولًا احترافية في الجبس ومواد البناء الحديثة.',
      });
      this.meta.updateTag({
        name: 'keywords',
        content: 'جبس, تشطيبات, مواد بناء, توريدات, مصر',
      });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });
      this.meta.updateTag({ name: 'author', content: 'شركة مصر للجبس' });

      // ✅ Open Graph Tags (للسوشيال ميديا)
      this.meta.updateTag({
        property: 'og:title',
        content: '🏆 Misr Gypsum | منتجات جبس وتشطيب احترافية',
      });
      this.meta.updateTag({
        property: 'og:description',
        content:
          'شركة مصر للجبس تقدم حلولًا احترافية في الجبس ومواد البناء الحديثة.',
      });
      this.meta.updateTag({
        property: 'og:image',
        content: '/img/web-app-manifest-192x192.png', // ⬅️ غيّر الرابط حسب صورتك
      });
      this.meta.updateTag({
        property: 'og:url',
        content: 'https://misrgypsum.com',
      });
      this.meta.updateTag({ property: 'og:type', content: 'website' });

      // ✅ Twitter Tags
      this.meta.updateTag({
        name: 'twitter:card',
        content: 'summary_large_image',
      });
      this.meta.updateTag({
        name: 'twitter:title',
        content: '🏆 Misr Gypsum | منتجات جبس وتشطيب احترافية',
      });
      this.meta.updateTag({
        name: 'twitter:description',
        content:
          'شركة مصر للجبس تقدم حلولًا احترافية في الجبس ومواد البناء الحديثة.',
      });
      this.meta.updateTag({
        name: 'twitter:image',
        content: '/img/web-app-manifest-192x192.png', // ⬅️ غيّر الرابط حسب صورتك
      });
    });
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
