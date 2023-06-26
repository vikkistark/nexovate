import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.backButtonAction()) {
        // Navigate back or do something else
          window.history.back();
      }
    });
  }
  backButtonAction(): boolean {
    // Override the default back button behavior here
    // Return true if the back button should navigate back
    // Return false if you want to prevent the default behavior
    return false;
  }
}
