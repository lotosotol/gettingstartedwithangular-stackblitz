/**
import { Component, OnInit } from '@angular/core';
*/
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

/**
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }
}
*/

export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}