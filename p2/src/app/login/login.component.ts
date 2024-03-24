// loginsignup.component.ts
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginsignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  showSuccessMessage: boolean = false;

  handleSignUp(): void {
    // Simple validation
    if (!this.name.trim() || !this.email.trim() || !this.password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Perform signup logic here

    // Show success message
    this.showSuccessMessage = true;

    // Reset form fields
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
