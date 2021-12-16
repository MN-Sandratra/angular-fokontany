import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/assets/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  allUser : User[] = [];

  sex_list = ['Homme', 'Femme'];

  statut_marital_list = ['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)'];

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
  fokontany = new FormControl('', Validators.required);
  statut_marital = new FormControl('', Validators.required);
  sexe = new FormControl('true', Validators.required);
  ddn = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password_insc = new FormControl('', [Validators.required , Validators.minLength(7)]);
  password_insc_conf = new FormControl('', [Validators.required]);
  inscriptionform = new FormGroup({ nom: this.nom, prenom: this.prenom, email: this.email,contact: this.contact, adresse: this.adresse, fokontany:this.fokontany, statut_marital: this.statut_marital, sexe: this.sexe, ddn: this.ddn, username: this.username, cin:this.cin,password: this.password_insc, passconf:this.password_insc_conf });

  constructor(private snackBar: MatSnackBar, private route: Router, private apiUser: UserService,private authService:AuthService) { }

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
      // var user: any = this.allUser.find(
      //   x => ((x.username === this.user.value) || (x.email === this.user.value)) && (x.password === this.password.value)
      // );

      // if (user !== undefined) {
      //   this.openSnackBarSuccess("Connexion réussie", "Fermer");
      //   this.route.navigate(['/dashboard'])
      // }
      // else {
      //   this.openSnackBarError("Erreur", "Fermer");
      // }
      this.authService.login(this.user.value,this.password.value)

      // console.log(this.authService.loggedUser);
      // if(this.authService.loggedUser!==undefined){
        
      //   this.openSnackBarSuccess("Connexion réussie", "Fermer");
      // }else{
      //   this.openSnackBarError("Erreur", "Fermer");
      // }
      
    }
  }

  onSubmitInscription() {
    if (this.inscriptionform.valid) {
      this.createUser();
    }
  }

  createUser() {
    var myUser = new User();
    myUser = {
      lastname: this.nom.value,
      firstname: this.prenom.value,
      address: this.adresse.value,
      fokontany: this.fokontany.value,
      phone: this.contact.value,
      email: this.email.value,
      cin: this.cin.value,
      password: this.password_insc.value,
      status: "Client",
      username: this.username.value,
      maritalStatus: this.statut_marital.value,
      sex: this.sexe.value
    }
    this.apiUser.createUser(myUser).subscribe(
      data => {
        this.openSnackBarSuccess("Inscription réussie", "Fermer")
        // location.reload();
        this.apiUser.getAllUser().subscribe(
        data => {
          this.allUser = data;
          // var btn = document.getElementById("connecter");
          var btnClose = document.getElementById("closeInsc");
          btnClose?.click();
          // btn?.click();
        },
        err => {
          console.log(err)
        })
      }, err => {
        console.log(err);
        this.openSnackBarError("Erreur de l'inscription", "Fermer")
      }
    )
  }

  getUserData() {

    this.apiUser.getAllUser().subscribe(
      data => {
        this.allUser = data;
      },
      err => {
        console.log(err)
      }
    )
  }


  ngOnInit(): void {
    this.getUserData();
  }

}
