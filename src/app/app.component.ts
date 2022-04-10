import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  switchTheme(): void {
    const body = document.querySelector('body');

    if (body && body.classList.contains('light-theme')) {
      body.classList.remove('light-theme')
    } else {
      body?.classList.add('light-theme')
    }
  }

  seeTheCode(): void {
    window.open('https://github.com/DavidKf/post-app', '_self');
  }

}
