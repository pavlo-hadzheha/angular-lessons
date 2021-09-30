import { Component, OnInit } from '@angular/core';
import { IPhoneBookEntry } from "./phone-book-entry.interface";

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  public phoneBook: Array<IPhoneBookEntry> = [
    { name: 'Andriy', surname: 'Saveskull', phone: '+38 (099) 44 53 764' },
    { name: 'Ivan', surname: 'Ivanov', phone: '+38 (099) 00 00 001' },
    { name: 'Petro', surname: 'Petrov', phone: '+38 (099) 00 67 467' },
    { name: 'Alina', surname: 'Nemyta', phone: '+38 (066) 15 35 746' },
    { name: 'Tracey', surname: 'Driscoll', phone: '(686) 690-8640' },
    { name: 'Vanessa', surname: 'Crawford', phone: '(225) 384-3659' },
    { name: 'Andrew', surname: 'Menken', phone: '(866) 928-0682' },
    { name: 'Christopher', surname: 'Webb', phone: '(601) 796-7019' },
    { name: 'Boris', surname: 'Remington', phone: '(624) 473-3966' },
    { name: 'Rose', surname: 'Beam', phone: '(459) 631-5876' },
    { name: 'Frank', surname: 'Moses', phone: '(252) 942-9993' },
    { name: 'Penelope', surname: 'Priestley', phone: '(876) 514-3211' },
  ];
  public phoneBookModel: IPhoneBookEntry = {
    name: '',
    surname: '',
    phone: ''
  }
  public isEdit = false;
  public editIndex!: number | null;
  public searchField = 'name';
  public searchString: string = '';
  public sortedColumn: keyof IPhoneBookEntry = 'name';
  public isAscending = true;
  public sortStatus = {
    name: true,
    surname: true,
    phone: true,
  }

  constructor() { }

  ngOnInit(): void { }

  public addEntry(): void {
      this.phoneBook.push(this.phoneBookModel);
      document.querySelector('#cancelModal')?.dispatchEvent(new MouseEvent('click'));
  }

  public editEntry(index: number): void {
    this.phoneBookModel = Object.assign({}, this.phoneBook[index]);
    this.editIndex = index;
    this.isEdit = true;
  }

  public updateEntry(): void {
      this.phoneBook[this.editIndex as number] = Object.assign({}, this.phoneBookModel);
      this.isEdit = false;
      document.querySelector('#cancelModal')?.dispatchEvent(new MouseEvent('click'));
  }

  public cancelUpdate(): void {
    this.isEdit = false;
  }

  public deleteEntry(index: number): void {
    this.phoneBook.splice(index, 1);
  }

  public searchBy(field: string): void {
    if (Object.keys(this.phoneBookModel).includes(field)) {
      this.searchField = field;
    } else {
      throw ReferenceError(`No such field: ${field}`);
    }
  }

  public sortBy(field: keyof IPhoneBookEntry): void {
    if (Object.keys(this.phoneBookModel).includes(field)) {
      this.sortedColumn = field;
      this.sortStatus[this.sortedColumn] = !this.sortStatus[this.sortedColumn];
    } else {
      throw ReferenceError(`No such field: ${field}`);
    }
  }
}
