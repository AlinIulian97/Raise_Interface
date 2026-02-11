import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcComponent } from './plc.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

describe('PlcComponent', () => {
  let component: PlcComponent;
  let fixture: ComponentFixture<PlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlcComponent, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
