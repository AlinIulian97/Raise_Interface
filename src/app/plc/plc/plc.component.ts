import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlcService } from '../../services/plc.service';

@Component({
  selector: 'app-plc',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './plc.component.html',
  styleUrls: ['./plc.component.css']
})
export class PlcComponent implements OnInit {

  testFlag: boolean = false;
  loading: boolean = false;

  constructor(private plcService: PlcService) {}

  ngOnInit(): void {
    this.readFlag();
  }

  readFlag(): void {
    this.loading = true;
    this.plcService.readTestFlag().subscribe({
      next: val => { this.testFlag = val; this.loading = false; },
      error: err => { console.error('Eroare citire PLC:', err); this.loading = false; }
    });
  }

  toggleFlag(value: boolean): void {
    this.loading = true;
    this.plcService.writeTestFlag(value).subscribe({
      next: val => { this.testFlag = val; this.loading = false; },
      error: err => { console.error('Eroare scriere PLC:', err); this.loading = false; }
    });
  }
}
