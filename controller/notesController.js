const Note = require('../model/note');


// CreateUser
const CreateUser = async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const note = await Note.create({
    title: title,
    body: body,
  });
  res.json({ note: note });
};


//Fetch All Users
const fetchAllUser = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

//Fetch User By Id
const fetchOneUser = async (req, res) => {
  const Id = req.params.id;
  const Find = await Note.findById(Id);
  res.json({ Find });
};


//Fetch User And Update
const fetchAndUpdate = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Get the data off the req body
  const { title, body } = req.body;

  // Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });

  // Find updated note
  const note = await Note.findById(noteId);

  // Respond with it
  res.json({ note });
};


//Fetch User And Delete
const fetchAndDelete = async (req, res) => {
  const Id = req.params.id;
  
  const Delete = await Note.findByIdAndDelete(Id)
  res.json({ Delete });
};


module.exports = {
    CreateUser:CreateUser,
    fetchAllUser:fetchAllUser,
    fetchOneUser:fetchOneUser,
    fetchAndUpdate:fetchAndUpdate,
    fetchAndDelete:fetchAndDelete

}