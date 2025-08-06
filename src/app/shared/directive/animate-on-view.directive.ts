import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[animateOnView]',
  standalone: true,
})
export class AnimateOnViewDirective implements AfterViewInit, OnDestroy {
  @Input('animateOnView') animationClass = 'animate-fade-in';
  @Input() delay = 0;
  @Input() staggerIndex = 0;
  @Input() staggerDelay = 100;

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        const totalDelay = this.delay + this.staggerIndex * this.staggerDelay;

        if (entry.isIntersecting) {
          setTimeout(() => {
            this.el.nativeElement.classList.add(this.animationClass);
            this.el.nativeElement.classList.remove('opacity-0');
          }, totalDelay);
        } else {
          // لما العنصر يخرج من الفيو شيل الكلاس
          this.el.nativeElement.classList.remove(this.animationClass);
          this.el.nativeElement.classList.add('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
