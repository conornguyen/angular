import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { MatSort, MatTableDataSource } from '@angular/material'
import { MessageService } from 'src/app/message/message.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


  public displayedColumns = ['id', 'title', 'author', 'number', 'date', 'action'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(
    private bookService: BookService
    , private messageService: MessageService) {
  }

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.loadBooks();
  }

  loadBooks() {
    return this.bookService.getBooks().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource)
    })
  }


 

  deleteBook(id: number) {
    return this.bookService.deleteBook(id).subscribe(
      
      list =>{

        this.loadBooks();
        this.messageService.addMessage({messageType: "success", messageDisplay: "Delete Book Successful.!!!"})
      }
    );

  }







}

