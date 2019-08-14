import { Injectable,HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

const dark = 'dark-theme';
const light = 'default-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {


  isdarktheme:boolean = false;

  constructor(public overlayContainer: OverlayContainer) { }

  @HostBinding('class') componentCssClass;


  toggleTheme()
  {
    console.log("hello i am here");
    this.isdarktheme = !this.isdarktheme;

    if(this.isdarktheme)
    {
      this.overlayContainer.getContainerElement().classList.add(dark);
      this.overlayContainer.getContainerElement().classList.remove(light);
      this.componentCssClass = dark;
      localStorage.setItem("theme", dark);
    }
    else
    {
      this.overlayContainer.getContainerElement().classList.add(light);
      this.overlayContainer.getContainerElement().classList.remove(dark);
      this.componentCssClass = light;
      localStorage.setItem("theme", light);
    }
  }

}
