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

## 04.ngif

### ng-template
```html
<button (click)="toggleDiv()">hide|show</button>

<div *ngIf="visible; then odd else even">
  Div Show
</div>

<ng-template #odd>Odd number of click!</ng-template>
<ng-template #even>Even number of click!</ng-template>

```
当`ngif`使用了`ng-template`后，`ngif`所在元素所包含的全部内容均无意义了。

### local variable
```html
<div *ngIf="language.frontend; let frontendLanguages " >
  {{ frontendLanguages.join(",") }}
</div>

``` 

## 05.ngFor
ngFor有几个内置的变量，如index, first, last, odd, even等关于序号的变量。

```html

<ul *ngFor="let item of language.frontend; let even = even; let first=first;">
  <li>{{ item }}</li>
  <li *ngIf="first">{{ item }}</li>
  <li *ngIf="even">{{ item }}</li>
</ul>

```

## 06.ngif
