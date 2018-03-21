import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = true;

    @HostListener('click') toogleOpen(){
       this.isOpen = !this.isOpen;
    }
}
