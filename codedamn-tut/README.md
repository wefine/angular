# Codedamn-Tut

Followed codedamn angular 4 tutorial.

## 01. get start
```bash
ng new codedamn-tut
cd codedamn-tut
ng set --global packageManager=yarn
yarn install
```

## 02. add header and directive

Add a component
```bash
ng g component header
```

add a directive
```bash
ng g directive blue-color
```

modify `blue-color.directive.ts`:
```typescript
import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";
  }

}
```

modify `app.component.html` to add header.
```html
<div style="text-align:center">
  <app-header></app-header>
</div>
```

modify `header.component.html`:
```html
<p blueColored>
  header works!
</p>

```

## 03. HostListener

```typescript
import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";
  }

  @HostListener("mouseover")
  mouseover() {
    console.log("mouseover")
  }

  @HostListener("document:click", ['$event'])
  click(event) {
    console.log("clicked ", event)
  }
}

```
