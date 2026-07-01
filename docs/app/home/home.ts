import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  copied = false;

  constructor(private cdr: ChangeDetectorRef) {}

  pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

  xjMEakV8IxYJKwYBBAHaRw8BAQdAcmtomh/NoK62QWE5A3BP6G9Fs4U5OxAg
DFOZMj7W6O7NG3NpZCBuYW4gPHNuYW5kaXBAcHJvdG9uLm1lPsLAEwQTFgoA
hQWCakV8IwMLCQcJEGc2S5cdsOTNRRQAAAAAABwAIHNhbHRAbm90YXRpb25z
Lm9wZW5wZ3Bqcy5vcmf5immpjhC5McabYITF+D11lMaJApmLgTnmZTCmptcV
5AUVCggODAQWAAIBAhkBApsDAh4BFiEEZgfQnDRXNSZ9kZHQZzZLlx2w5M0A
AN3SAP4vrw9OO4ORukG0JxeR+0C+3QNshiMi6kQtkyc0Za17ywEAuyA070Ic
BQvBRcJNE9nTpJSfUxUhaWbzSXqsr6z4wgXOOARqRXwjEgorBgEEAZdVAQUB
AQdAQ/7f/HIKWLXnwnJsb2ZO4T4fbsyF9gNnHNiNqBmLWy4DAQgHwr4EGBYK
AHAFgmpFfCMJEGc2S5cdsOTNRRQAAAAAABwAIHNhbHRAbm90YXRpb25zLm9w
ZW5wZ3Bqcy5vcmcbyXkcSkF8ivG4X+Hsims62FL0EbL0EvM74NgH3cY33wKb
DBYhBGYH0Jw0VzUmfZGR0Gc2S5cdsOTNAACfeAD+KiSZ0de0rzh/jR7JcTXz
rSn7R5nPVXCpAoTpO0Dp+FoA/2PYXhelKYiJ7MiKHtHilq2D+owefFOBcOa3
ITeBytwN
=zFG8
...
-----END PGP PUBLIC KEY BLOCK-----`;

copyKey() {
    navigator.clipboard.writeText(this.pgpKey);

    this.copied = true;

    setTimeout(() => {
      this.copied = false;
      this.cdr.detectChanges();
    }, 1600);
  }
}