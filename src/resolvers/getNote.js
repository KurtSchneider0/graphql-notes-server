const getNote = async (parent, {id}, context) => {
  const notes = await context.prisma.note.findMany()
  return notes[id - 1]
}

module.exports = {
  getNote
};