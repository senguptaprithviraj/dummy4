import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent implements OnInit {
  @ViewChild('buttonARef', {static: false}) buttonATemplateReference: any;
  @ViewChild('buttonBRef', {static: false}) buttonBTemplateReference: any;
  constructor() { 
    
  }

  ngOnInit() {
    //window.addEventListener("click",this.newFunc(), false);
    window.addEventListener('click', () => this.resetAllToolTip(), true);
  }
  resetAllToolTip() {
    this.buttonATemplateReference.hideTooltip();
    this.buttonBTemplateReference.hideTooltip();
  }
  onscroll(){
    console.log("this.buttonATemplateReference.nativeElement.scrollTop");
  }
}
