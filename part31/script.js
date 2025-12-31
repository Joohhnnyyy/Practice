class Bookmaker{
   constructor(name, author, prise, language, publisher){
    this.name = name;
    this.author = author;
    this.prise  = prise;
    this.language = language;
    this.publisher = publisher;
}
}
Bookmaker.prototype.getDetails = function(){
    console.log(`Book Name: ${this.name}
Author: ${this.author}
Prise: ${this.prise}
Language: ${this.language}
Publisher: ${this.publisher}`);
}
let B1 = new Bookmaker("Rich Dad Poor Dad", "Robert Kiyosaki", "$11.55", "English", "Warner Books");
B1.getDetails();
let B2 = new Bookmaker("Atomic Habits", "James Clear", "$16.20", "English", "Avery");
B2.getDetails();