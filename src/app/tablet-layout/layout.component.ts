import { OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {LocalBusService} from '../service/service.module';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutTabletComponent implements OnInit {
    constructor(public dialog: MatDialog, public bus: LocalBusService) { }

    ngOnInit() {
      this.bus.addObserver().subscribe((event) => {
          console.log('received event: ' + event);
          if (event === 'dialog') {
            this.openDialog();
          }
      });
    }

     openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
          width: '250px',
          data: { name: 'name', animal: 'animal' }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
}


@Component({
    selector: 'app-dialog-overview-example-dialog',
    templateUrl: 'layout.dialog.component.html',
  })
 export class DialogOverviewExampleDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }
