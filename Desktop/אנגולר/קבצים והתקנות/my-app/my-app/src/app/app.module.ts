
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { StudentDetailsFormMDComponent } from "./student-details-form-md/student-details-form-md.component";
import { StudentDetailsFormTDComponent } from "./student-details-form-td/student-details-form-td.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentService } from "./student.service";


@NgModule({
    declarations: [AppComponent, StudentListComponent, StudentDetailsComponent, StudentDetailsFormTDComponent, StudentDetailsFormMDComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {

}