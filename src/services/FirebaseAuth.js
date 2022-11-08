import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();

//Auth:

export async function registrarUsuario(email, password){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Si sale bien y es un usuario válido, se ejecuta este código:
      const user = userCredential.user;
      console.log("Usuario registrado con éxito");
      // ...
    })
    .catch((error) => {
      // Si sale mal y no es válido, se ejecuta este código:
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export async function login(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Si sale bien y es un usuario válido, se ejecuta este código:
      const user = userCredential.user;
      console.log("Login exitoso");
      console.log(user);
    })
    .catch((error) => {
      // Si sale mal y no es válido, se ejecuta este código:
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error de login");
      console.log(errorCode);
      console.log(errorMessage);
    });
}
