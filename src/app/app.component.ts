import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './models/item.model';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  newItemName = '';
  newItemDescription = '';

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemsService.getAll().subscribe(items => (this.items = items));
  }

  addItem(): void {
    if (!this.newItemName.trim()) return;

    this.itemsService
      .create({ name: this.newItemName, description: this.newItemDescription })
      .subscribe(() => {
        this.newItemName = '';
        this.newItemDescription = '';
        this.loadItems();
      });
  }

  removeItem(id?: number): void {
    if (id === undefined) return;
    this.itemsService.delete(id).subscribe(() => this.loadItems());
  }
}
