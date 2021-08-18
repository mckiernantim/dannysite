import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { LandingDialogComponent } from '../landing-dialog/landing-dialog.component';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
@Input()path: string;
@Input()height: string;
@Input()label: string;
@Input()color: string;
@Input()offset:string;
@Input()special:string;
@Input()link:string
@Input()id:string
@Input()size:string
@Input()xPos:string
@Input()align:string
@Input()margin:string;
@Input()noMargin:string;
  constructor( public dialog:MatDialog) { }
  
  ngOnInit(): void {
    console.log(this.noMargin)
  }
  openDialog(link) {
    const dialogRef = this.dialog.open(LandingDialogComponent,{
      data: {
        link: link
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
