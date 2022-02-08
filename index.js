const core = require('@actions/core');  // chargement du module core du toolkit

try {
    const firstname = core.getInput('firstname');   // récupération de la valeur du paramètre
    console.log('Hello ${firstname}!');
}
catch (error) {
    core.setFailed(error.message);  // indique à l'agent que letraitement a échoué et lui transmet les détails du problème
}
