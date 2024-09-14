import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../animations/fadeIn';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, SidenavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent {
  mode: number = 0;
  value: string | undefined;
  collapsed = signal(false);
  sideNavWidth = computed(() => this.collapsed() ? '65px' : '250px');


  updateMode(){
    if (this.mode == 1) {
      globalThis.document.body.setAttribute('data-bs-theme','light');
      globalThis.document.body.classList.replace('dark','light');
    }else{
      globalThis.document.body.setAttribute('data-bs-theme','dark');
      globalThis.document.body.classList.replace('light','dark');
    }
  }
}
