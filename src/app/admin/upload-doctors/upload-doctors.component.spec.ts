import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDoctorsComponent } from './upload-doctors.component';

describe('UploadDoctorsComponent', () => {
  let component: UploadDoctorsComponent;
  let fixture: ComponentFixture<UploadDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
