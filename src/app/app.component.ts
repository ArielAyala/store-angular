import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: 'store-angular';

  items = ['ariel', 'rick', 'john'];

  addItem() {
    this.items.push("nuevo item")
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}