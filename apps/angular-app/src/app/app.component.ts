import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebComponentAngularModule } from '@nx-workspace/web-component-angular';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, WebComponentAngularModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
}
