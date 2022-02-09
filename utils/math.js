/*
* randomINT(x):
* return from 0 ~ x-1 (not include x)
*/
function randomINT(x){
    return Math.floor(Math.random() * x);
};

module.exports = {

    randomINT: randomINT,

};