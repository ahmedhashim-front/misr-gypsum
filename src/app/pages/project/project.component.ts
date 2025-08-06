import {
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';
import { ProjectdetailesComponent } from '../projectdetailes/projectdetailes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TranslateModule,
    AnimateOnViewDirective,
    ProjectdetailesComponent,
    CarouselModule,
    RouterLink,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnDestroy {
  videos = ['/videos/video7.mp4', '/videos/video9.mp4', '/videos/video5.mp4'];
  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;

  currentVideoIndex = 0;
  videoReady = false;
  private intervalId: any;

  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);
  readonly selectedCategory = signal('ALL');
  readonly selectedProject = signal<any | null>(null);

  categories = ['ALL', 'GYPSUM', 'BOARDS', 'FINISHING'];
  processSteps = [
    {
      id: 1,
      title: 'PROJECT.PROCESS.STEP1.TITLE',
      description: 'PROJECT.PROCESS.STEP1.DESCRIPTION',
    },
    {
      id: 2,
      title: 'PROJECT.PROCESS.STEP2.TITLE',
      description: 'PROJECT.PROCESS.STEP2.DESCRIPTION',
    },
    {
      id: 3,
      title: 'PROJECT.PROCESS.STEP3.TITLE',
      description: 'PROJECT.PROCESS.STEP3.DESCRIPTION',
    },
    {
      id: 4,
      title: 'PROJECT.PROCESS.STEP4.TITLE',
      description: 'PROJECT.PROCESS.STEP4.DESCRIPTION',
    },
  ];

  whyUsSteps = [
    {
      id: 1,
      title: 'PROJECTSPAGes.WHY_US.STEP1.TITLE',
      description: 'PROJECTSPAGes.WHY_US.STEP1.DESCRIPTION',
    },
    {
      id: 2,
      title: 'PROJECTSPAGes.WHY_US.STEP2.TITLE',
      description: 'PROJECTSPAGes.WHY_US.STEP2.DESCRIPTION',
    },
    {
      id: 3,
      title: 'PROJECTSPAGes.WHY_US.STEP3.TITLE',
      description: 'PROJECTSPAGes.WHY_US.STEP3.DESCRIPTION',
    },
    {
      id: 4,
      title: 'PROJECTSPAGes.WHY_US.STEP4.TITLE',
      description: 'PROJECTSPAGes.WHY_US.STEP4.DESCRIPTION',
    },
  ];

  projects = [
    {
      id: 1,
      titleKey: 'PROJECTS.GYPSUM_1.TITLE',
      descriptionKey: 'PROJECTS.GYPSUM_1.DESCRIPTION',
      typeKey: 'PROJECTS.GYPSUM_1.TYPE',
      durationKey: 'PROJECTS.GYPSUM_1.DURATION',
      locationKey: 'PROJECTS.GYPSUM_1.LOCATION',
      budgetKey: 'PROJECTS.GYPSUM_1.BUDGET',
      challengeKey: 'PROJECTS.GYPSUM_1.CHALLENGE',
      solutionKey: 'PROJECTS.GYPSUM_1.SOLUTION',
      clientFeedbackKey: 'PROJECTS.GYPSUM_1.FEEDBACK',
      technologiesKey: 'PROJECTS.GYPSUM_1.TECHNOLOGIES',
      image: './img/Luxury Gypsum Decorations.webp',

      link: 'https://misr-gypsum.com/projects/elite-palace',
      category: 'GYPSUM',
      featured: true,
    },
    {
      id: 2,
      titleKey: 'PROJECTS.GYPSUM_2.TITLE',
      descriptionKey: 'PROJECTS.GYPSUM_2.DESCRIPTION',
      typeKey: 'PROJECTS.GYPSUM_2.TYPE',
      durationKey: 'PROJECTS.GYPSUM_2.DURATION',
      locationKey: 'PROJECTS.GYPSUM_2.LOCATION',
      budgetKey: 'PROJECTS.GYPSUM_2.BUDGET',
      challengeKey: 'PROJECTS.GYPSUM_2.CHALLENGE',
      solutionKey: 'PROJECTS.GYPSUM_2.SOLUTION',
      clientFeedbackKey: 'PROJECTS.GYPSUM_2.FEEDBACK',
      technologiesKey: 'PROJECTS.GYPSUM_2.TECHNOLOGIES',
      image: './img/Modern Ceiling with Hidden Lights.webp',
      link: '#',
      category: 'GYPSUM',
    },
    {
      id: 3,
      titleKey: 'PROJECTS.BOARDS_1.TITLE',
      descriptionKey: 'PROJECTS.BOARDS_1.DESCRIPTION',
      typeKey: 'PROJECTS.BOARDS_1.TYPE',
      durationKey: 'PROJECTS.BOARDS_1.DURATION',
      locationKey: 'PROJECTS.BOARDS_1.LOCATION',
      budgetKey: 'PROJECTS.BOARDS_1.BUDGET',
      challengeKey: 'PROJECTS.BOARDS_1.CHALLENGE',
      solutionKey: 'PROJECTS.BOARDS_1.SOLUTION',
      clientFeedbackKey: 'PROJECTS.BOARDS_1.FEEDBACK',
      technologiesKey: 'PROJECTS.BOARDS_1.TECHNOLOGIES',
      image: './img/Office Building.webp',

      link: '#',
      category: 'BOARDS',
      featured: true,
    },
    {
      id: 4,
      titleKey: 'PROJECTS.BOARDS_2.TITLE',
      descriptionKey: 'PROJECTS.BOARDS_2.DESCRIPTION',
      typeKey: 'PROJECTS.BOARDS_2.TYPE',
      durationKey: 'PROJECTS.BOARDS_2.DURATION',
      locationKey: 'PROJECTS.BOARDS_2.LOCATION',
      budgetKey: 'PROJECTS.BOARDS_2.BUDGET',
      challengeKey: 'PROJECTS.BOARDS_2.CHALLENGE',
      solutionKey: 'PROJECTS.BOARDS_2.SOLUTION',
      clientFeedbackKey: 'PROJECTS.BOARDS_2.FEEDBACK',
      technologiesKey: 'PROJECTS.BOARDS_2.TECHNOLOGIES',
      image: './img/Co-Working Spaces.webp',
      link: '#',
      category: 'BOARDS',
    },
    {
      id: 5,
      titleKey: 'PROJECTS.FINISHING_1.TITLE',
      descriptionKey: 'PROJECTS.FINISHING_1.DESCRIPTION',
      typeKey: 'PROJECTS.FINISHING_1.TYPE',
      durationKey: 'PROJECTS.FINISHING_1.DURATION',
      locationKey: 'PROJECTS.FINISHING_1.LOCATION',
      budgetKey: 'PROJECTS.FINISHING_1.BUDGET',
      challengeKey: 'PROJECTS.FINISHING_1.CHALLENGE',
      solutionKey: 'PROJECTS.FINISHING_1.SOLUTION',
      clientFeedbackKey: 'PROJECTS.FINISHING_1.FEEDBACK',
      technologiesKey: 'PROJECTS.FINISHING_1.TECHNOLOGIES',
      image: './img/European Villa.webp',

      link: '#',
      category: 'FINISHING',
      featured: true,
    },
    {
      id: 6,
      titleKey: 'PROJECTS.FINISHING_2.TITLE',
      descriptionKey: 'PROJECTS.FINISHING_2.DESCRIPTION',
      typeKey: 'PROJECTS.FINISHING_2.TYPE',
      durationKey: 'PROJECTS.FINISHING_2.DURATION',
      locationKey: 'PROJECTS.FINISHING_2.LOCATION',
      budgetKey: 'PROJECTS.FINISHING_2.BUDGET',
      challengeKey: 'PROJECTS.FINISHING_2.CHALLENGE',
      solutionKey: 'PROJECTS.FINISHING_2.SOLUTION',
      clientFeedbackKey: 'PROJECTS.FINISHING_2.FEEDBACK',
      technologiesKey: 'PROJECTS.FINISHING_2.TECHNOLOGIES',
      image: './img/Hotel Finishing.webp',
      link: '#',
      category: 'FINISHING',
      featured: true,
    },
  ];

  openProject(project: any) {
    this.selectedProject.set(project);
  }

  closeDetails() {
    setTimeout(() => this.selectedProject.set(null), 150);
  }

  get filteredProjects() {
    const selected = this.selectedCategory();
    return selected === 'ALL'
      ? this.projects
      : this.projects.filter((p) => p.category === selected);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.intervalId = setInterval(() => {
        this.videoReady = false;
        this.currentVideoIndex =
          (this.currentVideoIndex + 1) % this.videos.length;
      }, 8000);
    }
  }

  handleLoaded() {
    this.videoReady = true;
  }

  changeVideo(index: number) {
    this.videoReady = false;
    this.currentVideoIndex = index;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
