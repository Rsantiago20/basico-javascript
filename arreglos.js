var animales = ['🐻', '🐯', '🐣'];
animales.push('🐴');
animales.push('👽');
animales[2];
animales.unshift('🐘');
//animales.pop();


for (var i = 0; i < animales.length; i++){
    console.log('animal: ', animales[i]);
}

var admitidos = animales.filter(function (animal){
    return animal != '🐣';
});
admitidos;