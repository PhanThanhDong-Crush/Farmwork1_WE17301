import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'FW1';
  name: string = "Phan Thanh Dong";
  age: number = 20;
  myINfo: { class: string, teacher: string } = {
    class: "we17301",
    teacher: "Dat"
  };
  showAge() {
    let mess: string = "";
    if (this.age > 19) {
      mess = "ng lon"
    } else {
      mess = "tre trau"
    }
    return mess;
  }
}
