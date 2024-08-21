import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebComponentAngularComponent } from './web-component-angular.component';

describe('WebComponentAngularComponent', () => {
  let component: WebComponentAngularComponent;
  let fixture: ComponentFixture<WebComponentAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponentAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebComponentAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
