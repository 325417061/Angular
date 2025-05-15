import { Component ,OnInit} from "@angular/core";

@Component({
    // template:"<h1>{{x}}<br>{{title}}</h1>",
    templateUrl: "./app.component.html",
    selector: "app-root"
})
export class AppComponent implements OnInit {
    currentTime: string = '';
    greetingMessage: string = '';
  
    ngOnInit(): void {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000); // עדכון כל שנייה
    }
  
    updateTime(): void {
      const now = new Date();
      const currentHour = now.getHours(); // השעה הנוכחית בלי דקות
      this.greetingMessage = this.showTime(currentHour); // קריאה לפונקציה
      this.currentTime = now.toLocaleTimeString(); // עדכון השעה בפורמט מקומי
    }    x: number = 5;
    title: string = "hello from my app"
    showTime(h: number): string {
        if (h > 4) {
            if (h < 13)
                return "good morning";
            if (h < 18)
                return "good afternoon";
            if (h < 21)
                return "good evening";

            else return "good night";
        }
        else return "good night";
    }
}