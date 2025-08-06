import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';

@Component({
  selector: 'app-faq',
  imports: [TranslateModule, AnimateOnViewDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqList = [
    {
      question: 'FAQSECTION.QUESTIONS.SERVICES',
      answer: 'FAQSECTION.ANSWERS.SERVICES',
    },
    {
      question: 'FAQSECTION.QUESTIONS.PARTIAL',
      answer: 'FAQSECTION.ANSWERS.PARTIAL',
    },
    {
      question: 'FAQSECTION.QUESTIONS.CUSTOM_DESIGN',
      answer: 'FAQSECTION.ANSWERS.CUSTOM_DESIGN',
    },
    {
      question: 'FAQSECTION.QUESTIONS.DURATION',
      answer: 'FAQSECTION.ANSWERS.DURATION',
    },
    {
      question: 'FAQSECTION.QUESTIONS.START',
      answer: 'FAQSECTION.ANSWERS.START',
    },
    {
      question: 'FAQSECTION.QUESTIONS.ESTIMATE',
      answer: 'FAQSECTION.ANSWERS.ESTIMATE',
    },
    {
      question: 'FAQSECTION.QUESTIONS.PAYMENT_METHODS',
      answer: 'FAQSECTION.ANSWERS.PAYMENT_METHODS',
    },
    {
      question: 'FAQSECTION.QUESTIONS.DOWNPAYMENT',
      answer: 'FAQSECTION.ANSWERS.DOWNPAYMENT',
    },
    {
      question: 'FAQSECTION.QUESTIONS.WARRANTY',
      answer: 'FAQSECTION.ANSWERS.WARRANTY',
    },
    {
      question: 'FAQSECTION.QUESTIONS.CLIENT_MATERIALS',
      answer: 'FAQSECTION.ANSWERS.CLIENT_MATERIALS',
    },
  ];

  allOpen = false;

  toggleAllFaqs() {
    this.allOpen = !this.allOpen;
  }

  isOpen(questionKey: string): boolean {
    return this.allOpen;
  }
  testimonialsList = [
    {
      nameKey: 'TESTIMONIALS.ITEM_1.NAME',
      titleKey: 'TESTIMONIALS.ITEM_1.TITLE',
      feedbackKey: 'TESTIMONIALS.ITEM_1.FEEDBACK',
      avatar: '/assets/testimonials/ahmed.jpg',
    },
    {
      nameKey: 'TESTIMONIALS.ITEM_2.NAME',
      titleKey: 'TESTIMONIALS.ITEM_2.TITLE',
      feedbackKey: 'TESTIMONIALS.ITEM_2.FEEDBACK',
      avatar: '/assets/testimonials/naglaa.jpg',
    },
    {
      nameKey: 'TESTIMONIALS.ITEM_3.NAME',
      titleKey: 'TESTIMONIALS.ITEM_3.TITLE',
      feedbackKey: 'TESTIMONIALS.ITEM_3.FEEDBACK',
      avatar: '/assets/testimonials/badr.jpg',
    },
  ];
}
