import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() public submitSurveyData: any;
  @Input() public myForm: FormGroup;
  @Input() public save: number;
  @Input() public goBack: any;
//  @Input() public idiomaA: string;
  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
