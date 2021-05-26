import { SimpleChange } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.css']
})
export class PasswordStrengthBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  bar0: string = '';
  bar1: string = '';
  bar2: string = '';
  bar3: string = '';

  msg: string = '';
  msgColor: string = '';

  @Input()
  public passwordToCheck!: string;

  private colors = ['#EC5252', '#FFE48C', '#46C28E', '#208058'];

  checkStrength(p: string) {
    // 1
    let force = 0;

    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];

    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    // 5
    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;

    // 6
    force = (p.length <= 6) ? Math.min(force, 10) : force;

    // 7
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 30) : force;
    force = (passedMatches === 4) ? Math.min(force, 40) : force;

    return force;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes.passwordToCheck.currentValue;
    //this.setBarColors(4, '#DDD');
    this.bar0=this.bar1=this.bar2=this.bar3='#DDD';
    if (password) {

      const pwdStrength = this.checkStrength(password);

      switch (pwdStrength) {
        case 10:
          this.msg = 'Too weak';
          break;
        case 20:
          this.msg = 'Could be stronger';
          break;
        case 30:
          this.msg = 'Strong password';
          break;
        case 40:
          this.msg = 'Very strong password';
          break;
      }

      const c = this.getColor(this.checkStrength(password));
      this.setBarColors(c.index, c.color);
    } else {
      this.msg = '';
    }
  }

  private getColor(s: number) {

    let index = 0;
    if (s === 10) {
      index = 0;
    } else if (s === 20) {
      index = 1;
    } else if (s === 30) {
      index = 2;
    } else if (s === 40) {
      index = 3;
    } else {
      index = 4;
    }
    this.msgColor = this.colors[index];
    return {
      index: index + 1,
      color: this.colors[index]
    };
  }

  private setBarColors(count: number, col: string) {
    switch (count) {
      case 4:
        this.bar0='#EC5252';
         this.bar1 = '#FFE48C';
         this.bar2 = '#46C28E';
        this.bar3 = col;
        break;
      case 3:
        this.bar0='#EC5252';
         this.bar1 = '#FFE48C';
         this.bar2 = col;
        break;
      case 2:
        this.bar0='#EC5252';
         this.bar1 = col;
        break;
      case 1:
         this.bar0 = col;
        break;
      
      
    }

    // for (let n = 0; n < count; n++) {
    //   this['bar' + n] = col;
    // // 
  }


}
