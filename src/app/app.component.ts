import { Component} from '@angular/core';
import { fadeAnimation } from '../animations/fadeIn';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { SpinnerComponent } from './util/spinner/spinner.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeAnimation]
})

export class AppComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  }
}

