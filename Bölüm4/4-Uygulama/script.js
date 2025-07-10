function Player(username){
    this.username = username;
    this.score = 0;
    this.start = function(){
        return `${this.username} oyuna başladı.`;
    };
    this.stop = function (){
        return `${this.username} oyundan çıktı.`;
    };
    this.pause = function (){
        return `${this.username} oyunu durdurdu.`;
    };
    this.add_score = function(val){
        this.score += val;
    };
    this.show_score = function(){
        return `${this.username} isimli oyuncunun skoru ${this.score}`;
    }
}

const oyuncu1 = new Player("Alp");
const oyuncu2 = new Player("Arda");
const oyuncu3 = new Player("Alya");

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());
(oyuncu1.add_score(50));
console.log(oyuncu1.show_score());
console.log(oyuncu3.show_score());