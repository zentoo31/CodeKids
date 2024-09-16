import { trigger, transition, style, animate, query } from '@angular/animations';
export const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('250ms', style({ opacity: 1 }))
    ])
]); 