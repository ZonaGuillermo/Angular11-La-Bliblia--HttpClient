import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  title = 'httpClientApp';
  arrPosts: any[] = [];
  formPost: FormGroup = new FormGroup({
    userId: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((posts) => {
      this.arrPosts = posts;
    })
  }

  onClick(postId: number): void {
    this.postService.getById(postId).subscribe((post) => {
      console.log(post);
    })
  }

  onClickButton(): void {
    this.postService.create({ userId: 2, title: 'nuevo titulo', body: 'cuerpo' }).subscribe((post) => {
      console.log(post);
    })
  }

  onSubmit(): void {
    this.postService.create(this.formPost.value).subscribe((post) => {
      console.log(post);
    })
  }

}
