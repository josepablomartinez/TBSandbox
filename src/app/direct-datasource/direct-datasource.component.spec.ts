import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDatasourceComponent } from './direct-datasource.component';

describe('DirectDatasourceComponent', () => {
  let component: DirectDatasourceComponent;
  let fixture: ComponentFixture<DirectDatasourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectDatasourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
