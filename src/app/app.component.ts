import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapPersonCircle,
  bootstrapMailbox2,
  bootstrapKeyFill,
  bootstrapGoogle,
  bootstrapFacebook,
  bootstrapCheckLg,
  bootstrapHouseFill,
  bootstrapBoxArrowLeft,
} from '@ng-icons/bootstrap-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    FontAwesomeModule,
    SideNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapPersonCircle,
      bootstrapMailbox2,
      bootstrapKeyFill,
      bootstrapGoogle,
      bootstrapFacebook,
      bootstrapCheckLg,
      bootstrapHouseFill,
      bootstrapBoxArrowLeft,
    }),
  ],
})
export class AppComponent {
  title = 'gym_track';

  inputValue?: string;
}
