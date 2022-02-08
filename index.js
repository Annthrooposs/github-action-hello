const core = require('@actions/core');  // chargement du module core du toolkit

try {
    const myfirstname = core.getInput('firstname');   // récupération de la valeur du paramètre
    console.log('Hello ${myfirstname}!');
    console.log("::warning::Cette action est obsolète, pensez à migrer sur l'action officielle XXXX/YYYY@v1")
    core.warning("::warning::Cette action est obsolète, pensez à migrer sur l'action officielle XXXX/YYYY@v2")
}
catch (error) {
    core.setFailed(error.message);  // indique à l'agent que letraitement a échoué et lui transmet les détails du problème
}
