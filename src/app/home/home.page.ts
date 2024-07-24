import { Component } from '@angular/core';
import { IonLabel, IonCol, IonRow, IonGrid, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonCol, IonRow, IonGrid, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}
}
