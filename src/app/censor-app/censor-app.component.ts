import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censor-app',
  templateUrl: './censor-app.component.html',
  styleUrls: ['./censor-app.component.scss']
})
export class CensorAppComponent implements OnInit {

  private censoredWords: Array<string> = [];
  public arrBadWords: Array<string> = [];
  public badWord!: string;
  public result = '';
  public isCensored = false;
  public isCopied = false;
  public isFocused = false;
  public clipSettings = {
    "text-danger": !this.isCopied,
    "text-success": this.isCopied,
    "semi-transparent": this.isFocused,
  };

  constructor() { }

  ngOnInit(): void { }

  addWord(): void {
    if (this.badWord) {
      this.arrBadWords.push(this.badWord);
      this.badWord = '';
    }
  }

  resetWords(): void {
    this.arrBadWords = [];
    this.censoredWords = [];
  }

  onFocus(): void {
    this.isFocused = true;
    this.updateClipSettings();
    this.undoCensor()
  }

  onBlur(): void {
    this.isFocused = false;
    this.updateClipSettings();
  }

  onInput(): void {
    this.isCopied = false;
    this.isCensored = false;
    this.updateClipSettings();
  }

  censor(): void {
    if (this.result) {
      let str = this.arrBadWords.join('|');
      str = `\\b(${str})\\b`;
      let regex: RegExp = new RegExp(str, 'gi');
      let replacer = (match: string): string => {
        this.censoredWords.push(match);
        return "*".repeat(match.length);
      }
      this.result = this.result.replace(regex, replacer);
      this.isCensored = true;
    }
  }

  updateClipSettings(): void {
    this.clipSettings = {
      "text-danger": !this.isCopied,
      "text-success": this.isCopied,
      "semi-transparent": this.isFocused,
    };
  }

  undoCensor(): void {
    let regex = /\*{2,}/gi;
    let i = 0;
    let replacer = (match: string): string => {
      return this.censoredWords[i++];
    }
    this.result = this.result.replace(regex, replacer);
    this.isCensored = false;
  }

  copy(): void {
    navigator.clipboard.writeText(this.result).then(() => {
      this.isCopied = true;
      this.updateClipSettings();
    });
  }
}