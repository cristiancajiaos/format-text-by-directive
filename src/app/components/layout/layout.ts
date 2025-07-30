import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  constructor(
    private toastr: ToastrService
  ){

  }

  ngOnInit(): void {

  }

  public pressMe(): void {
    this.toastr.info('Pressed');
  }

}
