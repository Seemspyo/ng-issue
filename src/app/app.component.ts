import { Component } from '@angular/core';
import { Test, TestModule } from './lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'test';
  testProp: Test;
  a = new TestModule();

}
