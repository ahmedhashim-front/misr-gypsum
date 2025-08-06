import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';

@Component({
  selector: 'app-projectdetailes',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projectdetailes.component.html',
  styleUrl: './projectdetailes.component.css',
})
export class ProjectdetailesComponent {
  // 🟡 Inputs & Outputs
  @Input() project: any;
  @Output() closed = new EventEmitter<void>();

  // 🟡 HostBinding لـ RTL/LTR
  @HostBinding('attr.dir') dir: 'rtl' | 'ltr' = 'ltr';

  // 🟡 Injected Services
  private readonly toastr = inject(ToastrService);
  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);

  // 🟡 Init الاتجاه حسب الـ SSR
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const htmlDir = document.documentElement.getAttribute('dir');
      this.dir = htmlDir === 'rtl' ? 'rtl' : 'ltr';
    }
  }

  // ✅ TrackBy لأداء أفضل
  trackTech(index: number, tech: string): string {
    return tech;
  }

  // ✅ عرض رسالة أن المشروع تجريبي فقط
  showInfo(): void {
    const title =
      this.translate.instant('DEMO_PROJECT.TITLE') || 'Demo Project';
    const message =
      this.translate.instant('DEMO_PROJECT.MESSAGE') ||
      'This project is for demonstration purposes only and not available online.';
    this.toastr.info(message, title);
  }
}
