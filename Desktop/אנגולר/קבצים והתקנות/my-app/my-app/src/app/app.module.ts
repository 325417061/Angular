import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import{BrowserModule} from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
@NgModule({
    declarations:[AppComponent, StudentListComponent, StudentDetailsComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppComponent]
})
export class AppModule {

}