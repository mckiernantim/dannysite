import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    link: string 
  }
@Component({
  selector: 'app-landing-dialog',
  templateUrl: './landing-dialog.component.html',
  styleUrls: ['./landing-dialog.component.css']
})
export class LandingDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  selection:string
  ngOnInit(): void {
    this.selection = this.data.link
    console.log(this.selection, this.data.link)
  }

}
