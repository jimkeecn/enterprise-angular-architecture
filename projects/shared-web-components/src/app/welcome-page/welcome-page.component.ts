import { Component, OnInit, Input, Output ,EventEmitter, TemplateRef, ViewChild} from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styles:['.component-container{display:flex;flex-direction:column}.component-action{padding:12px;}.component-action input{padding:12px;margin-right:20px;}.component-action input:focus{outline:none;}.component-action button{padding:12px;border:none;outline:none;text-transform:uppercase;color:#fff;background:rgb(20, 128, 218);cursor:pointer;transition:500ms all ease;}.component-action button:hover{background:rgb(16, 100, 168);}.component-h5{padding:12px;background-color:brown;color:#fff}.component-p{padding:12px;background-color:rgb(194, 67, 67);color:#fff}']
})
export class WelcomePageComponent implements OnInit {
  @Output() validate = new EventEmitter<any>();

  submitted:boolean =false;

  name:string = '';
  constructor(public apiService : ApiService) { }

  ngOnInit() {
  }

  validateFn(){
    if(this.name){
      this.apiService.getTodos().subscribe(todo =>{
        console.log('got todo',todo)
        this.validate.emit(todo);
      })
    }else{
      alert('please write your name again');
      this.submitted = false;
    }
  }
}
