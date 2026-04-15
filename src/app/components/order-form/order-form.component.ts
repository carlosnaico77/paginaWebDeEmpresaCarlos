import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  private translationService = inject(TranslationService);

  onOrderSubmit(event: Event) {
    event.preventDefault();
    const successMsg = this.translationService.translate('CONTACT.SUCCESS');
    alert(successMsg);
  }
}
