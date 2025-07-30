import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appFormatText]',
  standalone: false
})
export class FormatText {

  constructor(
    private el: ElementRef,
    private toastr: ToastrService
  ) { }

  // Keydown: Al presionar una tecla
  /*
  @HostListener('keydown', ['$event'])
  public onKeyDown($event: KeyboardEvent) {
    this.toastr.info($event.key);
  }
  */

  // Focus: Se hace foco en un elemento
  /*
  @HostListener('focus', ['$event'])
  onFocus($event: any) {
    this.toastr.success(`onFocus: ${$event.target.value}`);
  }
  */

  // Blur: Se deja de focalizar en un elemento
  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    // this.toastr.info(`onBlur: ${$event.target.value}`)
    const textStr: string = $event.target.value;
    $event.target.value = textStr.substring(0,2).concat('/').concat(textStr.substring(2));
  }

  // Focusout: El foco se propaga a sus elementos padres
  @HostListener('focusout', ['$event'])
  onFocusOut($event: any) {
    this.toastr.info(`onFocusOut: ${$event.target.value}`);
  }
}
