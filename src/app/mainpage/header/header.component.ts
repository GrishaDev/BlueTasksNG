import { Component, OnInit,Input,HostBinding,EventEmitter,Output } from '@angular/core';
import {Router} from '@angular/router';
import { OverlayContainer} from '@angular/cdk/overlay';
// import { ThemesService } from '../../themes.service';

const dark = 'dark-theme';
const light = 'default-theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user:string;
  isdarktheme:boolean = false;

  // @Output() themechange: EventEmitter<Boolean> =  new EventEmitter();

  constructor(private router: Router,public overlayContainer: OverlayContainer) { }

  // @HostBinding('class') componentCssClass;

  ngOnInit() {
  }

  logout()
  {
    this.router.navigate([""]);
  }

  // toggleTheme()
  // {
  //   this.isdarktheme = !this.isdarktheme;

  //   this.themechange.emit(this.isdarktheme);

  //   // if(this.isdarktheme)
  //   // {
  //   //   this.overlayContainer.getContainerElement().classList.add(dark);
  //   //   this.overlayContainer.getContainerElement().classList.remove(light);
  //   //   this.componentCssClass = dark;
  //   //   localStorage.setItem("theme", dark);
  //   // }
  //   // else
  //   // {
  //   //   this.overlayContainer.getContainerElement().classList.add(light);
  //   //   this.overlayContainer.getContainerElement().classList.remove(dark);
  //   //   this.componentCssClass = light;
  //   //   localStorage.setItem("theme", light);
  //   // }
  // }
}
