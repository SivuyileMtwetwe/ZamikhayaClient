import { TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/Auth/auth.service'; // Assuming the module file is named 'auth.service.ts' and located in the 'services' folder

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
