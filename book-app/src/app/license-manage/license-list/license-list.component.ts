import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MessageService } from 'src/app/message/message.service';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {

  dataSource = new MatTableDataSource();

  public displayedColumns = ['id', 'book', 'number', 'from', 'to', 'action'];

  constructor(private messageService: MessageService,
    private licenseService: LicenseService) { }

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    
  ngOnInit() {
    
    this.dataSource.sort = this.sort;
    this.loadLicenses();
  }

  loadLicenses() {
    return this.licenseService.getLicenses().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource)
    })
  }

}
