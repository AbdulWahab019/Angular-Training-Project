import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../app.module';
import { AppService } from './app.service';

const companies = [
  {
      id: 1,
      name: 'Alpha'
  },
  {
      id: 2,
      name: 'Beta'
  },
  {
      id: 3,
      name: 'Angular'
  },
  {
      id: 4,
      name: 'Tkxel'
  }
];

describe('AppService', () => {
  let service: AppService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          AppModule,
          RouterTestingModule.withRoutes([]),
      ],
  }).compileComponents();
    service = TestBed.inject(AppService);

    router = TestBed.get(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return companies information', () => {
    expect(service.getCompanies()).toEqual(companies);
  });

  it('should check for user authentication', () => {
    const status = localStorage.getItem('token') !== null;

    expect(service.isAuthenticated()).toEqual(status);
  });
});
