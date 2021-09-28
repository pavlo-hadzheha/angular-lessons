import { Component, OnInit } from '@angular/core';
import { IUser } from "./user.interface";
import { CUSTOM_REGEX_FORMATS } from "./directives/correct-format.function";
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

    public userList: Array<IUser> = [
        {
            login: 'Ivan',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Petro',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Artur',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Vasylisa',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Iryna',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Vasyl',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Alina',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Victoria',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Yevgen',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Grygoriy',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
        {
            login: 'Vitaliy',
            email: 'ii@gmail.com',
            password: 'qwerty12345'
        },
    ];
    public formats = CUSTOM_REGEX_FORMATS;
    public userInstance: IUser = {
        login: 'Rostyslav',
        email: 'rr@gmail.com',
        password: 'hvbjsawe'
    }
    public isEditModeOn = false;
    public editIndex!: number | null;


    onSubmit(form: any): void {
        console.log(form);
    }

    ngOnInit() { }

    showControlData(form: any) {
        return [
            form && form.controls.login && form.controls.login.value,
            form && form.controls.email && form.controls.email.value,
            form && form.controls.password && form.controls.password.value,
        ].join('\t');
    }

    addUser(form: NgForm): void {
        this.userList.push(this.userInstance);
        this.clearInputs();
        form.reset();
    }

    deleteUser(index: number): void {
        this.userList.splice(index, 1);
    }

    editUser(index: number): void {
        this.userInstance = this.userList[index];
        this.isEditModeOn = true;
        this.editIndex = index;
    }

    saveChanges(form: NgForm): void {
        this.userList.splice(this.editIndex as number, 1, this.userInstance);
        this.editIndex = null;
        this.isEditModeOn = false;
        form.reset();
    }

    private clearInputs(): void {
        this.userInstance = {
            login: '',
            email: '',
            password: ''
        }
    }
}
