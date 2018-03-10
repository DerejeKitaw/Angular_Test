//#region Method One
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
//#region beforEach

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
        ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

//#endregion beforEach

it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}));
it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

//#endregion Method One
//#region Method Two
/// As it should be
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

describe('AppComponent (initial CLI version - as it should be)', () => {

  let app: AppComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
        ],
      declarations: [
        AppComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it(`should have as title 'app'`, () => {
    expect(app.title).toEqual('app');
  });

  it('should render title in an h1 tag', () => {
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('h1').textContent)
      .toContain('Welcome to app!');
  });
});

//#endregion Method Two
