import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../license.service';
import { ActivatedRoute } from '@angular/router';
import { License } from '../license';

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.scss']
})
export class LicenseDetailComponent implements OnInit {

  constructor(private licenseService: LicenseService,
    private route: ActivatedRoute) { }
    license: License
  id= + this.route.snapshot.paramMap.get('id')
  ngOnInit() {
    this.getLicense(this.id);
  }

  getLicense(id: number){
    return this.licenseService.getLicense(this.id).subscribe( license =>
      this.license = license
    )
  }

}
