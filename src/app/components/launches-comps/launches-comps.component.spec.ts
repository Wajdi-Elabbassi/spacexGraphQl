import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import { LaunchesCompsComponent } from './launches-comps.component';

describe('LaunchesCompsComponent', () => {
  let component: LaunchesCompsComponent;
  let fixture: ComponentFixture<LaunchesCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesCompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
