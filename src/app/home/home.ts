import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForumsServices } from '../forums-services';
import { forumPost } from '../app';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private forumService: ForumsServices, private cdr: ChangeDetectorRef) { }

  editIndex: number | null = null;
  editedForum: forumPost | null = null;

  ngOnInit(): void {

    this.forumService.getForums().subscribe(data => {
      this.forums = data;
      this.cdr.detectChanges();
    })
  }

  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''

  }
  forums: forumPost[] = [];

  onSubmit(forum: forumPost) {
    console.log('on submit', forum)
    forum.userId = 1;
    forum.id = this.forums.length + 1;
    this.forumService.addForum(forum).subscribe(newForum => {
      this.forums.unshift(newForum);
      this.cdr.detectChanges();
      console.log('new add forum' + newForum);
    })
  }

  editForum(id: number) {
    this.editIndex = id;

    const original = this.forums.find(f => f.id === id);
    this.editedForum = original ? { ...original } : null;
    console.log(id)
  }

  cancelarEdit() {
    this.editIndex = null;
  }

}
