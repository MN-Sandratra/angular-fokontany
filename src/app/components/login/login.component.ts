import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  hide_conf = true;

  user = new FormControl('', Validators.required);
  
  password = new FormControl('', Validators.required);

  loginform = new FormGroup({user : this.user, password : this.password});

  // inscriptionForm
  nom = new FormControl('', Validators.required);
  prenom = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  contact = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(10), Validators.minLength(10)]);
  cin = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(12), Validators.minLength(12)]);
  adresse = new FormControl('', Validators.required);
  commune = new FormControl('', Validators.required);
  profession = new FormControl('', Validators.required);
  sexe = new FormControl('true', Validators.required);
  ddn = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password_insc = new FormControl('', [Validators.required , Validators.minLength(7)]);
  password_insc_conf = new FormControl('', [Validators.required]);
  inscriptionform = new FormGroup({ nom: this.nom, prenom: this.prenom, email: this.email,contact: this.contact, adresse: this.adresse, commune:this.commune, profession: this.profession, sexe: this.sexe, ddn: this.ddn, username: this.username, cin:this.cin,password: this.password_insc, passconf:this.password_insc_conf });

  constructor(private snackBar: MatSnackBar) { }

  getErrorMessage(champ: FormControl) {
    if (champ.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }
    return '';
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }

    return this.email.hasError('email') ? 'Pas un email valide' : '';
  }

  getPasswordError(champ: FormControl) {
    if (champ.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }
    return (champ.hasError('minlength')) ? 'Mot de passe : 7 caractères minimum' : '';
  }

  

  getPasswordConfError(){
    if (this.password_insc_conf.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    } 
    // return (this.inscriptionform.hasError('notSame') ? 'Mot de passe non identique' : '');
    return '';
  }

  getContactError() {
    if(this.contact.hasError('required')){
      return 'Complétez ce champ pour continuer';
    }
    else if (this.contact.hasError('pattern')) {
      return 'Seulement des chiffres'
    }
    else if (this.contact.hasError('minlength')) {
      return 'Contact : 10 chiffres minimum';
    }
    else
      return (this.contact.hasError('maxlength')) ? 'Contact : 10 chiffres maximum' : '';
  }

  getCinError() {
    if(this.cin.hasError('required')){
      return 'Complétez ce champ pour continuer';
    }
    else if (this.cin.hasError('pattern')) {
      return 'Seulement des chiffres'
    }
    else if (this.cin.hasError('minlength')) {
      return 'CIN : 12 chiffres minimum';
    }
    else
      return (this.cin.hasError('maxlength')) ? 'CIN : 12 chiffres maximum' : '';
  }

  openSnackBarSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['green-snackbar']
    });
  }

  openSnackBarError(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['red-snackbar']
    });
  }

  onSubmitLogin() {
    if (this.loginform.valid) {
     this.openSnackBarSuccess("Connexion réussie", "Fermer");
    }
    else {
      this.openSnackBarError("Erreur", "Fermer");
    }
  }

  onSubmitInscription() {
    if (this.inscriptionform.valid) {
      
    }
  }


  ngOnInit(): void {
   
  }

}
