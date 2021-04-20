import {Component} from '@angular/core';

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  busy = false;

  public setBusy(): void {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
    }, 1500);
  }
}
