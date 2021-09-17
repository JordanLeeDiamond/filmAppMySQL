const command = process.argv[2];
const { addFilm, listFilm, updateFilm, deleteFilm } = require ("./film/film.methods");

const app = async () => {
    switch (command) {
        case "add":
            const filmObj = {
                name: process.argv[3],
                actor: process.argv[4],
                like: process.argv[5]
            };
            await addFilm(filmObj);
            break;
        case "list":
            await listFilm();
            break;
        case "update":
            const updateObj ={
                name : process.argv[3],
                actor: process.argv[4],
                like: process.argv[5],
            };
            await updateFilm(updateObj);
            break;
        case "delete":
            const find = {
                name: process.argv[3]
            };
            await deleteFilm(find);
            break;
            default:
                console.log("Please Enter a Valid Command")
    }
};

app();