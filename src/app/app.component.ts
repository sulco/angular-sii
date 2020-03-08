import { Component } from "@angular/core";
import { kebabCase } from "lodash";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = kebabCase("Hello from angular!");
}
