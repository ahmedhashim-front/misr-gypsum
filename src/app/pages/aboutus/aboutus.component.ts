import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnViewDirective } from '../../shared/directive/animate-on-view.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [TranslateModule, AnimateOnViewDirective,RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {}
