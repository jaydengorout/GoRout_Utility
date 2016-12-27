import {auth} from "firebase"



class Authentication extends auth{

  constructor(){
    super()
  }

  static GoogleAuth(){
    let credential = new auth.GoogleAuthProvider()
    credential.addScope('https://www.googleapis.com/auth/plus.login')
    return credential
  }

  createUser(email) {
    this.createUserWithEmailAndPassword(email, 'pass')
  }

  signIn() {
    this.signInWithPopup(this.providers.Google).catch()
  }

  onAuthStateChanged(cb) {
    firebase.onAuthStateChanged(cb)
  }
}