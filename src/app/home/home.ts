import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForumsServices } from '../forums-services';
import { forumPost } from '../app';


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  constructor(private forumService:ForumsServices){}

  ngOnInit(): void {
    
    this.forumService.getForums().subscribe(data=>{
      this.forums = data;
      console.log('forums loaded:', data)
    })
  }

  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''

  }
 forums: forumPost[] = [];

 onSubmit(forum:forumPost){
  console.log('on submit',forum)
 }

}
