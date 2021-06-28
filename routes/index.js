const { Router, query } = require(`express`);
const{ FetchData }=require("../lib/data");
const router = Router();
//Primer path

router.get("/PersonajeID", (req, res) =>{
    const { query: {iden} } = req;
    var identi = parseInt(`${iden}`)
    res.json({
        msg: "Personaje con id",
        body: (async()=>{
            (await FetchData.getCharacter(identi));
        })()

    })   
})
//Segundo path
//Arrays IDs
.get("/ArraysID", (req, res) =>{
    const { query: {idens} } = req;
    var identi = (`${idens}`)
    var tefy = identi.split(',');
    res.json({
        msg: "Personaje con arrays",
        body: (async()=>{
            (await FetchData.getSpecificCharacters(tefy));
        })()

    })   
})
//Tercer Path
//Numero de pagina con personaje
.get("/Pagina", (req, res) =>{
    const { query: {pag} } = req;
    var identi = parseInt(`${pag}`)
    res.json({
        msg: "Personaje con paginas",
        body: (async()=>{
            (await FetchData.getByPage(identi));
        })()

    })   
})
//4to Path 
//Genero y pagina
.get("/PersonajeID", (req, res) =>{
    const { query: {genero, pagina} } = req;
    var pag = parseInt(`${pagina}`);
    var gene = (`${genero}`);
    res.json({
        msg: "Personajes genero y pagina",
        body: (async()=>{
            (await FetchData.getByCharacterGender(gene, pag));
        })()

    })   
})






module.exports.RouterIndex = router;