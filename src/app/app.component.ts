import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { provideIcons } from '@ng-icons/core';
import {
  bootstrapPersonCircle,
  bootstrapMailbox2,
  bootstrapKeyFill,
  bootstrapGoogle,
  bootstrapFacebook,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzButtonModule, NzInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapPersonCircle,
      bootstrapMailbox2,
      bootstrapKeyFill,
      bootstrapGoogle,
      bootstrapFacebook,
    }),
  ],
})
export class AppComponent {
  title = 'gym_track';

  inputValue?: string;
}
