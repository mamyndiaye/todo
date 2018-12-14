import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
       title = 'todolist';
  
       constructor() {
 const  config = {
    apiKey: "AIzaSyDCdJe8pBhw7yhdxWR7eS8aCqohD4pLa5g",
    authDomain: "todo-3180e.firebaseapp.com",
    databaseURL: "https://todo-3180e.firebaseio.com",
    projectId: "todo-3180e",
    storageBucket: "todo-3180e.appspot.com",
    messagingSenderId: "836231388449"
  };
  firebase.initializeApp(config);

}
}
