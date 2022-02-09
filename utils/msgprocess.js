
function str_process(str, prefix_length) {
    const args = str.slice(prefix_length).split(/ +/);
    return args.shift().toLowerCase();
}

function have_chance(str){
    return str.includes("機率") ? true : false;
}

module.exports = {

    str_process : str_process,
    have_chance : have_chance,
}
