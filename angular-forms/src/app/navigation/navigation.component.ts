import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  links: {name: string, href: string}[] = [
    {name: 'Simple form', href: 'simple-form'},
    {name: 'Advanced form', href: 'advanced-form'},
  ]
}
