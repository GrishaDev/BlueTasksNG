import { Injectable,HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

const dark = 'dark-theme';
const light = 'default-theme';

// #2e2d2d
const filtersdark = '#383838';
const filterswhite = '#ececec';

const bgdark = '#3d3d3d';
const bgwhite = '';
const textdark = '#000000';
const textwhite = '#ffffff';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {


  isdarktheme:boolean = false;
  filtersColor:string = "";
  bgColor:string = "";
  textColor:string = "";

  constructor(public overlayContainer: OverlayContainer) { }

  @HostBinding('class') componentCssClass;


  toggleTheme()
  {
    console.log("hello i am here");
    this.isdarktheme = !this.isdarktheme;

    if(this.isdarktheme)
    {
      // this.overlayContainer.getContainerElement().classList.add(dark);
      // this.overlayContainer.getContainerElement().classList.remove(light);
      // this.componentCssClass = dark;
      this.filtersColor = filtersdark;
      this.bgColor = bgdark;
      this.textColor = textwhite;
      // localStorage.setItem("theme", dark);
      return true;
    }
    else
    {
      // this.overlayContainer.getContainerElement().classList.add(light);
      // this.overlayContainer.getContainerElement().classList.remove(dark);
      // this.componentCssClass = light;
      this.filtersColor = filterswhite;
      this.bgColor = bgwhite;
      this.textColor = textdark;
      // localStorage.setItem("theme", light);
      return false;
    }
  }

}
