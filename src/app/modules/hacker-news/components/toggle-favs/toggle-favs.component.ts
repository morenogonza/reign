import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@store';
import { ToggleFavs } from '@news';

@Component({
  selector: 'app-toggle-favs',
  templateUrl: './toggle-favs.component.html',
  styles: [],
})
export class ToggleFavsComponent implements OnInit {
  favsControl: FormControl;

  constructor(private store: Store<AppState>) {
    this.favsControl = new FormControl('all');
  }

  ngOnInit(): void {
    this.favsControl.valueChanges.subscribe((value) => {
      this.store.dispatch(ToggleFavs({ favs: value }));
    });
  }
}
