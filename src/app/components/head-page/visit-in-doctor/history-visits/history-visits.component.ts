import {Component, OnInit} from '@angular/core';
import {VisitToDoctorService} from '../../../../services/visit-to-doctor.service';

@Component({
    selector: 'app-history-visits',
    templateUrl: './history-visits.component.html',
    styleUrls: ['./history-visits.component.css']
})
export class HistoryVisitsComponent implements OnInit {
    allPatientVisitsToDoctor;

    constructor(private visitToDoctorService: VisitToDoctorService) {
    }

    ngOnInit() {
        console.log('HistoryVisitsComponent');
        this.visitToDoctorService.getAllVisitsByPatientId().subscribe(value => {
            console.log(value);
            this.allPatientVisitsToDoctor = value;
            // console.log(this.allPatientVisitsToDoctor.dateOfVisit);
        });
    }


    getAllVisitsToDoctor() {
        console.log('getAllVisitsToDoctor');
        this.visitToDoctorService.getAllByDateOfVisitBefore().subscribe(value => {
            console.log(value);
        });

    }

    get() {
        this.visitToDoctorService.getByPatientIdAndDate().subscribe(value => {
            console.log(value);
        });
    }


}
