const Letter = function (mianLetter, isCorrect) {
    this.mainLetter = mainLetter,
        this.isCorrect = isCorrect;

    this.returnCorrectLetter = () => {
        if (isCorrect) return mianLetter;
    }

    this.checkLetters = (charGuessed) => {
        if (charGuessed === mainLetter) {
            isCorrect = true;
        } else {
            isCorrect = false;
        }
    }
}

Letter.prototype.toString = () => {
    console.log(this.mainLetter);
};

//module.exports = Letter;