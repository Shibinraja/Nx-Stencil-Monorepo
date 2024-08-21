import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../../generated/directives/proxies';
import {defineCustomElements} from '@nx-workspace/web-component/loader'

const DECLARATIONS = [MyComponent];

defineCustomElements()

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class WebComponentAngularModule {}