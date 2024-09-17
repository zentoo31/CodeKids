import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, HostListener, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SpinnerComponent } from '../util/spinner/spinner.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, SidenavComponent, SpinnerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent {
  mode: number = 0;
  value: string | undefined;
  collapsed = signal(false);
  isMobile: boolean = false;

  sideNavWidth = computed(() => {
    if (this.isMobile) {
      return this.collapsed() ? '0px' : '100vw'; // Pantalla completa en móvil
    } else {
      return this.collapsed() ? '65px' : '250px'; // Ancho estándar en escritorio
    }
  });

  constructor(){
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (typeof window !== "undefined") {
     this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }
  
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
