class Breed{
    constructor(name, size){
        this.name = name;
        this.size = size.toLowerCase();
    }
}

class Dog extends Breed{
    constructor(name, size, dogName, age){
        super(name, size);
        this.dogName = dogName;
        this.age = age;
    }
    bark(){
        let sizeString = this.size === 'l' ? 'large' : this.size === 'm' ? 'medium' : 'small';
        alert(`${this.dogName}, the ${sizeString} ${this.name} says 'Woof! Woof!'`);
    }
}

class Menu {
    constructor(){
        this.dogs = [];
        this.selected = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.createDog();
                    break;
                case '2':
                    this.viewDog();
                    break;
                case '3':
                    this.deleteDog();
                    break;
                case '4':
                    this.displayDogs();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Add Dog
        2) View Dog
        3) Delete Dog
        4) Say Hi to Dogs
        `);
    }

    showDogMenuOptions(dogInfo){
        return prompt(`
        0) Back
        1) Edit Name
        2) Edit Age
        ${dogInfo}
        `);
    }

    displayDogs(){
        for (let i = 0; i < this.dogs.length; i++){
            this.dogs[i].bark();
        }
        
    }

    createDog(){
        let name = prompt('Enter breed name:');
        let size = prompt('Enter breed size(L, M, S):');
        let dogName = prompt('Enter dog name:');
        let age = prompt('Enter dog age:');
        this.dogs.push(new Dog(name, size, dogName, age));
    }

    deleteDog(){
        let index = prompt('Enter the index of the dog you want to delete:');
        alert('Dog ' + this.dogs[index].dogName + ' has been deleted.');
        if (index > -1 && index < this.dogs.length){
            this.dogs.splice(index, 1);
        }
    }
    
}

let menu = new Menu();
menu.start();