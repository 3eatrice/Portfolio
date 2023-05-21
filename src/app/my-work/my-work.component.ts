import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  works = [{
    heading: 'El Pollo Loco',
    subtitle: 'Javascript based jump and run game',
    link: 'https://beatrice-ambos.de/El%20Pollo%20Loco/index.html',
    github: 'https://github.com/3eatrice/El-Pollo-Loco',
    type: 'js'
  },
  {
    heading: 'Join',
    subtitle: 'Javascript based project management tool (group work)',
    link: 'https://beatrice-ambos.de/Join/index.html',
    github: 'https://github.com/3eatrice/Join',
    type: 'js'
  },
  {
    heading: 'Portfolio',
    subtitle: 'Angular based webpage',
    link: 'https://beatrice-ambos.de/',
    github: 'https://github.com/3eatrice/Portfolio',
    type: 'ang'
  },
  {
    heading: 'Pokedex',
    subtitle: 'Javascript based pokedex (worked with APIs)',
    link: 'https://beatrice-ambos.de/Pokedex/index.html',
    github: 'https://github.com/3eatrice/Pok-dex',
    type: 'js'
  }
];

  button: number = 0;

}

