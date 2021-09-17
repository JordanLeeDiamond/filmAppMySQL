const { update } = require("./film.model");
const Film = require("./film.model");

exports.addFilm = async (filmObj) => {
    try{
        await Film.sync();
        await Film.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilm = async () => {
    try{
        const list = await Film.findAll();
        console.log(list);
    } catch (error){
        console.log(error);
    }
};

exports.updateFilm = async (updateObj)=>{
    try {
        await Film.update({
            like: updateObj.like
        }, {
            where: { name: updateObj.name }
        })
    } catch (error) {
        console.log(error);
    }
};

exports.deleteFilm = async (filmQuery) => {
    try{
        await Film.destroy({ where: filmquery });
        console.log(`${filmQuery.name} has been Deleted.`)
    } catch (error){
        console.log(error);
    }
};