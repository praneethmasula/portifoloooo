import { Component, HostListener } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio-fronend';
  isSticky: boolean = false;
  hov:boolean=false;
  ele: any;
  titleSelected: any;
  elementss:any;
  observer=new IntersectionObserver ((e)=>{
    e.forEach((e1)=>{
     if(e1.isIntersecting){
       e1.target.classList.add('show');
     }
     else{
       e1.target.classList.remove('show');
     }
    })
 })
  
  constructor(){
 
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.elementss=document.querySelectorAll(".j");
    this.elementss.forEach((sec: any)=>{
              let windowheight=window.innerHeight;
              let offset=sec.getBoundingClientRect().top;
          
              console.log("wew"+windowheight);
              let height=150;
              if(offset<windowheight-height){
                sec.classList.add('animate');
              }
              else{
                sec.classList.remove('animate');
              }
    })
    this.isSticky = window.pageYOffset >= 100;
  }
  scroll(s:string){
    if(s=='top'){
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
     this.ele=document.getElementById(s);
    this.ele.scrollIntoView({
      behavior: "smooth",
      block: 'end'
    });

 
  }




  @HostListener('mouseenter', ['$event']) 
  mouseover(){
    this.hov=true;
  }

  select(s:string) {
    this.titleSelected = s;
  }
}
