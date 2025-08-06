import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, AnimateOnViewDirective,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: any;
}
