const newNote = (parent, {newNoteInput: {name, content, author}}, context) => {
  const newNote = context.prisma.note.create({
    data: {
      name: name,
      content: content,
      author: author
    },
  });
  return newNote
}

module.exports = {
  newNote
};