import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATABASEComponent } from './database.component';

describe('DATABASEComponent', () => {
  let component: DATABASEComponent;
  let fixture: ComponentFixture<DATABASEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DATABASEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DATABASEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
