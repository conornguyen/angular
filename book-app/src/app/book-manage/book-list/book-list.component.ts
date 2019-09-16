import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { MatSort, MatTableDataSource } from '@angular/material'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

 
  public displayedColumns = ['id', 'title', 'author', 'number', 'action' ];

  dataSource = new MatTableDataSource<Book>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
  constructor(
    private bookService: BookService) {
  }

  ngOnInit() {
 
  this.dataSource.sort = this.sort;
  this.loadBooks();
  }

  loadBooks() {
    return this.bookService.getBooks().subscribe(data => {
      this.dataSource.data = data ;
      console.log(this.dataSource)
    })
  }







}

