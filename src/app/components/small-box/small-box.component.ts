import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.css']
})
export class SmallBoxComponent implements OnInit {

  @Input() valor: number;
  @Input() descricao: string;
  @Input() icon: string;
  @Input() link:any[];
  @Input('bg-class') bg: string = "bg-info";
  constructor() { }

  ngOnInit() {
  }

}
