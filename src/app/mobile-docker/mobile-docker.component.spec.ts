import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDockerComponent } from './mobile-docker.component';

describe('MobileDockerComponent', () => {
  let component: MobileDockerComponent;
  let fixture: ComponentFixture<MobileDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDockerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
