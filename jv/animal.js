class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData() {
        return 'Type: ${this.type}, Legs: ${this.legs}';
    }

    static return10() {
        return 10;
    }
}

// kiểu ni là xuất theo ES5 trở lui nha
// module.exports = {Animal}

// kiểu mặc định của ES5
// module.exports = Animal

// kiểu ni là xuất theo ES6+ nha
// m có thể viết lại kiểu ni là xuất theo mặc định 
export default Animal;