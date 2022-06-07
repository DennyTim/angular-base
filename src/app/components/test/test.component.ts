import { Component } from "@angular/core";

@Component({
  selector: "[app-test]",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent {
  public lang = "Angular";
  public n1: number = 10;
  public n2: number = 20;
  public n3: number = 20;
  public random = Math.floor(Math.random() * 10) + 1;
  public student: {
    name: string;
    gpa: string;
  } = {
    name: "John",
    gpa: "4.0"
  };
  public list: number[] = [1, 2, 3, 4, 5];
  public name: string = "Default message";
  public text: string = "";

  // Property binding
  public val: string = "Hello";
  public disabled: boolean = true;
  public title: string = "Some title";
  public classList: string = "red";
  public isItalic: boolean = true;
  public additionalClass: boolean = true;
  public classConditions = {
    "green": this.additionalClass,
    "bold": this.additionalClass
  };
  public bgColor: string = "steelblue";
  public titleStyles: { [key: string]: string } = {
    "font-size": "19px",
    "color": "white",
    "background-color": "steelblue",
    "cursor": "pointer"
  };
  // 2-way data binding
  public txt: string = '';

  public sumOfNums(...args: number[]): number {
    return args.reduce((acc, item) => acc + item, 0);
  }

  public handleClick(name: string): void {
    if (name === "Default message") {
      this.name = "Success message";
    }
    if (name === "Success message") {
      this.name = "Default message";
    }
  }

  public handleKeyDown(value: string): void {
    this.text = value;
  }

  public handleBackspace(): void {
    this.text = "";
  }
}
