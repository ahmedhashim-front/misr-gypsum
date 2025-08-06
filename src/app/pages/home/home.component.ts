import { Component, signal, computed, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, AnimateOnViewDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  showFullText = signal(false);
  showAllImg = signal(false);

  videos = ['/videos/video7.mp4', '/videos/video9.mp4', '/videos/video5.mp4'];
  currentVideoIndex = signal(0);
  currentVideo = computed(() => this.videos[this.currentVideoIndex()]);
  isTransitioning = signal(false);

  yearsExperience = signal(0);
  clients = signal(0);
  projects = signal(0);
  satisfaction = signal(0);

  toggleShowFullText() {
    this.showFullText.update((v) => !v);
  }

  nextVideo() {
    const nextIndex = (this.currentVideoIndex() + 1) % this.videos.length;
    this.currentVideoIndex.set(nextIndex);
  }

  prevVideo() {
    const prevIndex =
      (this.currentVideoIndex() - 1 + this.videos.length) % this.videos.length;
    this.currentVideoIndex.set(prevIndex);
  }

  onVideoLoadStart() {
    this.isTransitioning.set(true);
  }

  onVideoLoaded() {
    setTimeout(() => this.isTransitioning.set(false), 300);
  }

  ngOnInit(): void {
    setTimeout(() => {
      let y = 0,
        c = 0,
        p = 0,
        s = 0;
      const interval = setInterval(() => {
        if (y < 12) this.yearsExperience.set(++y);
        if (c < 50) this.clients.set(++c);
        if (p < 100) this.projects.set(++p);
        if (s < 98) this.satisfaction.set(++s);
        if (y >= 12 && c >= 50 && p >= 100 && s >= 98) clearInterval(interval);
      }, 30);
    }, 1000);
  }

  productImages = [
    {
      image: '/img/1/Frame 50-5.webp',
      title: 'PRODUCTS_SECTION.CATEGORIES.CEILINGS',
    },
    {
      image: '/img/1/Frame 50-7.webp',
      title: 'PRODUCTS_SECTION.CATEGORIES.CEMENT',
    },
    {
      image: '/img/1/Frame 50-6.webp',
      title: 'PRODUCTS_SECTION.CATEGORIES.INSULATION',
    },
    {
      image: '/img/1/Frame 50-1.webp',
      title: 'PRODUCTS_SECTION.CATEGORIES.MARBLE',
    },
    {
      image: '/img/1/Frame 50-9.webp',
      title: 'PRODUCTS_SECTION.CATEGORIES.GYPSUM',
    },
    {
      image: '/img/1/Frame 50-8.webp',
      title: 'PRODUCTS_SECTION.CATEGORIES.ALUMINUM',
    },
  ];

  partnerCompanies = [
    {
      name: 'TechNova Solutions',
      logo: 'https://via.placeholder.com/100x100?text=TechNova',
      description: 'شركة رائدة في الحلول التقنية والتحول الرقمي.',
    },
    {
      name: 'FutureSoft Egypt',
      logo: 'https://via.placeholder.com/100x100?text=FutureSoft',
      description: 'متخصصة في تطوير البرمجيات للشركات الصغيرة والمتوسطة.',
    },
    {
      name: 'InnoBuilds Group',
      logo: 'https://via.placeholder.com/100x100?text=InnoBuilds',
      description: 'شركة مقاولات ذكية تستخدم تقنيات حديثة في البناء.',
    },
    {
      name: 'SmartEdge Media',
      logo: 'https://via.placeholder.com/100x100?text=SmartEdge',
      description: 'وكالة تسويق رقمي تركّز على تحسين تجربة المستخدم.',
    },
    {
      name: 'GreenTech Ventures',
      logo: 'https://via.placeholder.com/100x100?text=GreenTech',
      description: 'تعمل على مشاريع بيئية مستدامة وحلول طاقة نظيفة.',
    },
  ];

  partnerKeys = [
    'BUILD_TECH',
    'ADVANCE_GYPSUM',
    'MISR_ALUMINUM',
    'GREEN_PANEL',
    'ULTRA_CHEM',
    'NOVA_CEMENT',
  ];

  trackByTitleKey(index: number, product: any): string {
    return product.titleKey;
  }
}
