import { Component, computed, Input, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
export type MenuItem = {
  icon: string,
  label: string,
  route: string
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItem = signal<MenuItem[]>([
    {
      icon: 'person',
      label: 'Perfil',
      route: '/dashboard/profile'
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard/dashboard-info'
    },
    {
      icon: 'book',
      label: 'Cursos',
      route: '/dashboard/subjects'
    }
  ]);

  profilePicSize  = computed(() => this.sideNavCollapsed() ? '32': '100'); 
}
