const router = require("express").Router();
const {faker} = require("@faker-js/faker");
const Notes = require("../Model/Note.model");

router.get("/Notes", async(req,res) => {
    const notes = await Notes.findAll({
        where:{
            isArchived: false,
        }
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: notes
    })
})

router.get("/Note/:ID_Note", async(req,res) => {
    const ID_Note = req.params.ID_Note;
    const note = await Notes.findOne({
        where: {
            ID_Note: ID_Note
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: note
    })
})

router.post("/Note", async(req,res) =>{
    await Notes.sync();
    const createdNote = await Notes.create({
        Title: req.body.Title,
        Content:  req.body.Content,
        isArchived: false
    });

    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created note"
    });
})

router.patch("/Note", async(req,res) =>{
    const updateNote = await Notes.update({
        Title: req.body.Title,
        Content:  req.body.Content,
    },{
        where: {
            ID_Note: req.body.ID_Note,
        }
    })
})

router.delete("/Note", async(req,res) =>{
    const deleteNote = await Notes.destroy({
        where: {
            ID_Note: req.body.ID_Note
        }
    })
})

module.exports = router;