console.log("HAA BHAI KAAM KAR RHA H");
const getFirstName = (x) => x.split('  ')[0];
console.log(getFirstName('kavya goel'));
const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}