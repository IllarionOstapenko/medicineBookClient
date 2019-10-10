import {Component, OnInit} from '@angular/core';
import {VisitToDoctorService} from '../../../services/visit-to-doctor.service';
import {Route, Router} from '@angular/router';

@Component({
    selector: 'app-history-in-doctor',
    templateUrl: './visit-in-doctor.component.html',
    styleUrls: ['./visit-in-doctor.component.css']
})
export class VisitInDoctorComponent implements OnInit {

    constructor(private visitToDoctorService: VisitToDoctorService,
                private router: Router) {
    }

    allPatientVisitsToDoctor;

    ngOnInit() {
        // setTimeout(() => {
        //     this.visitToDoctorService.getAllVisitsByPatientId().subscribe(value => {
        //         console.log(value);
        //         this.allPatientVisitsToDoctor = value;
        //         // console.log(this.allPatientVisitsToDoctor.dateOfVisit);
        //     });
        // }, 3);

    }





    // historyVisits() {
    //     this.router.navigate(['*/history-visits']);
    // }
}

