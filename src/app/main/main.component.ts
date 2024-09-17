import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  animations:[
    trigger('typingAnimation', [
      transition(':enter', [
        style({ width: '0', overflow: 'hidden' }),
        animate('4s steps(30)', style({ width: '90vw' }))
      ])
    ])
  ]
})
export class MainComponent {
  textCode: String = `function learnCoding() {
  if (age >= 7 && age <= 14) {
    joinKidCodeAcademy();
    while (learning) {
      code();
      have_fun();
      create_amazing_things();
    }
  }
}

learnCoding();`;
}
