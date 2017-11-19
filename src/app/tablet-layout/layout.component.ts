import { OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {LocalBusService} from '../service/service.module';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { Router } from '@angular/router';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutTabletComponent implements OnInit, OnDestroy {
    constructor(public router: Router, public dialog: MatDialog, public bus: LocalBusService) { }

    ngOnInit() {
      this.bus.addObserver('dialogs').subscribe((event) => {
          console.log('received event: ' + event);
          if (event.type === 'action1Dialog') {
            this.openDialog(event.payload, event.type);
          }
      });
      this.bus.addObserver('newIntervention').subscribe((event) => {
        this.router.navigate(['intervention']);
       });
    }

    ngOnDestroy() {
      this.bus.removeObservers('dialogs');
    }

     openDialog(data: any, sendTo: string): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
          width: '250px',
          data: data
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.bus.notifyAll(sendTo, {type: 'action1DialogResponse', payload: result});
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
