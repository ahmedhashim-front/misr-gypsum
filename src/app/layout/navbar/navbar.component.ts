import {
  Component,
  HostListener,
  PLATFORM_ID,
  OnInit,
  inject,
  signal,
  computed,
  effect,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../core/services/theme/theme.service';
import { CustomTranslateService } from '../../core/services/translate/translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // ✅ روابط التنقل
  readonly navLinks = [
    { label: 'HOME', route: '/home' },
    { label: 'ABOUT', route: '/about' },
    { label: 'PROJECTS_', route: '/projects' },
    { label: 'OURPRODUCT', route: '/productdetailes' },
    { label: 'CONTACT', route: '/contact' },
    { label: 'FAQ', route: '/faq' },
  ];

  // ✅ الخدمات
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translateService = inject(CustomTranslateService);
  readonly themeService = inject(ThemeService);

  // ✅ متغيرات الحالة
  readonly isBrowser = isPlatformBrowser(this.platformId);
  readonly menuOpen = signal(false);
  readonly scrollY = signal(0);
  readonly isScrolled = computed(() => this.scrollY() > 10);
  readonly currentLang = signal(this.translateService.getCurrentLang());

  constructor() {
    // ✅ ربط اللغة بالـ HTML
    effect(() => {
      this.translateService.switchLang(this.currentLang());
    });
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.scrollY.set(window.scrollY);
    }
  }

  @HostListener('window:scroll')
  handleScroll() {
    if (this.isBrowser) {
      this.scrollY.set(window.scrollY);
    }
  }

  toggleLang(): void {
    this.currentLang.update((lang) => (lang === 'ar' ? 'en' : 'ar'));
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
