// -Créer une classe Pokemon avec comme paramètres name, attack, defense, hp et luck une fonction
// isLucky, et une fonction attackPokemon
// -Créer deux instances de Pokémon avec des stats différentes.
// - Tant que l'un des deux n'est pas mort
// - le premier attaque le second (isLucky + attackPokemon)
// - afficher la vie et les dégâts endommagés du second
// - si le second est mort, arrêter la boucle
// - le second attaque le premier (isLucky + attackPokemon)
// - afficher la vie et les dégâts endommagés du premier
// - Afficher un message de mort pour le pokemon perdant
// Attention
// - la formule des dégâts est la suivante: dégâts = att de l'attaquant – def du defenseur
// - la luck correspond à la probabilité de toucher l'ennemi (précision en pourcentage)
// - générer un nombre aléatoire avec Math.random() (qui retourne un décimal entre 0 et 1)
// - si ce nombre est inférieur à luck du Pokemon alors le Pokemon peut attaquer

class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){
        if(this.isLucky()){
            let damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){
        return this.luck>Math.random()
    }
}
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5);
let boulbi=new Pokemon('Boulbi',18,4,70,0.8);

while(dracofeu.hp >0 && boulbi.hp>0){
    dracofeu.attackPokemon(boulbi)
    if(boulbi.hp<=0){
        console.log(boulbi.name+" is dead !");
        break;
    }
    boulbi.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" is Dead !");
        break
    }
} 