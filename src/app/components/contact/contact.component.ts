import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private translationService = inject(TranslationService);

  onSubmit(event: Event) {
    event.preventDefault();
    const successMsg = this.translationService.translate('CONTACT.SUCCESS');
    alert(successMsg);
  }
}
