const core = require('@actions/core');  // chargement du module core du toolkit

try {
    const firstname = core.getinput('firstname');   // r�cup�ration de la valeur du param�tre
    console.log('Hello ${firstname}!');
}
catch (error) {
    core.setFailed(error.message);  // indique � l'agent que letraitement a �chou� et lui transmet les d�tails du probl�me
}