let loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
        return this.water/this.flour*100;
    }
}

let megaObject ={
    foo:'air',
    bar:'fire',
    fum:'water',
    quux:'earth',
}
/* for (x in megaObject){
    console.log(x+':'+ megaObject[x]);
} */
let snack ={
    meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

let parasyte = [
    {name: 'Ki-woo', jobTitle:'Eng-tutor', boss:'Dong Ik'},
    {name: 'Ki-jeong', jobTitle:'Art-tutor', boss:'Dong Ik'},
    {name: 'Kim Ki-taek', jobTitle:'Chaufeur', boss:'Dong Ik'},
    {name: 'Choong-sook', jobTitle:'Maid', boss:'Dong Ik'},
    {name: 'Dong Ik', jobTitle:'CEO'}
]
/* for(x of parasyte){
    console.log(x.jobTitle +' '+ x.name)
} */
/* for(x of parasyte){
    console.log(x.jobTitle +' '+ x.name + ' reports to '+ x.boss +'.')
    if(x.boss===undefined){
        console.log(x.name + " doesn't report to anybody.")
    }
} */
function createCharater (Name,Nickname,Race,Origin,Weapon,Attack,Defense) {
    return {Name:Name,
    Nickname:Nickname,
    Race:Race,
    Origin:Origin,
    Weapon:Weapon,
    Attack:Attack,
    Defense:Defense,
    describe:function(){console.log(`${this.Name} is a ${this.Race} from ${this.Origin}.`)},
    evaluateFight:function(charater){
        let x =  this.Attack - charater.Defense;
        let y = this.Defense - charater.Attack; 
        return `Your opponent takes ${x} damage and you receive ${y} damage`}
    }}
let gandalf = createCharater('Gandalf the White','gandalf','Wizard','Middle Earth','wizard staff',10,6);
let bilbo = createCharater('Bilbo Baggins','bilbo','Hobbit','The Shire',' Ring',2,1);
let frodo = createCharater('Frodo Baggins','frodo','Hobbit','The Shire','String and Barrow Blade',3,2);
let aragorn = createCharater('Aragorn son of Arathorn','aragorn','Man','Dunnedian','Anduril',6,8);
let legolas = createCharater('Legolas','legolas','Elf','Woodland Realm',' Bow and Arrow',8,5);
let charaters = [gandalf,bilbo,frodo,aragorn,legolas];
let arwen = createCharater('Arwen Undomiel','arwen', 'Half-Elf','Riverdell','Hadhafang',7,3);
//console.log(arwen.evaluateFight(bilbo));
charaters.push(arwen);
charaters.find(function(charater){
    return charater.Nickname==='aragorn';
});
charaters.filter(function(charater){
    return charater.Attack > 5;
});
gandalf.describe = function(){console.log(`${this.Name} is a ${this.Race} from ${this.Origin} who uses a ${this.Weapon}.`)};

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];
function findOne(arr,query){
    let queryKeys = Object.keys(query);
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < queryKeys.length; j++){
            let key = queryKeys[j];
            if(arr[i][key] !==query[key]){
                break
            }
            if(arr[i][key]=== query[key]){
                return arr[i];
            }
        }
    }
}
const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne:function(query){
        let queryKeys = Object.keys(query);
        for (var i = 0; i < this.store.heroes.length; i++){
            for (var j = 0; j < queryKeys.length; j++){
                let key = queryKeys[j];
                if(this.store.heroes[i][key] !==query[key]){
                    break
                }
                if(this.store.heroes[i][key]=== query[key]){
                    return this.store.heroes[i];
                }
            }
        }
    }
  };
console.log(Database.findOne({ id: 2 }));
//console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
//console.log(gandalf.describe());
/////////////////////TESTS/////////////////////////
//console.log(loaf.hydration());
//console.log(snack.meals[3]);
