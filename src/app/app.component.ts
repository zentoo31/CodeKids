import { Component} from '@angular/core';
import { fadeAnimation } from '../animations/fadeIn';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeAnimation]
})

export class AppComponent {
    
}

