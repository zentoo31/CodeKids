import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  iconName: string = 'dark_mode';

  constructor(private themeService: ThemeService) {
    // Suscribirse al estado del tema para actualizar el icono
    this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.iconName = isDarkMode ? 'light_mode' : 'dark_mode';
    });
  }

  toggleMode() {
    this.themeService.toggleTheme();
  }
}
