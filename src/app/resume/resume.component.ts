import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  pdfSrc="/assets/Resume.pdf";

  pdfName= "Shivani's Resume";

  download(){
    FileSaver.saveAs(this.pdfSrc,this.pdfName);
  }

  

  constructor() { }

  ngOnInit() {
  }

}
