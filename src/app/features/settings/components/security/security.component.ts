import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { SelectInputComponent } from "../../../../shared/components/select-input/select-input.component";

@Component({
  selector: 'school-security',
  imports: [ButtonModule, InputNumberModule, SelectInputComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityComponent {


   timeoutOptions = [
    { label: '15 minutes', value: 15 },
    { label: '30 minutes', value: 30 },
    { label: '1 hour', value: 60 },
    { label: '2 hours', value: 120 }
  ];

  saveSecuritySettings(): void {
    console.log('Saving security settings...');
    // Save logic here
  }
}
