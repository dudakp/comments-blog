module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      authorName: String,
      content: String,
      article: String
    },
    {timestamps: true}
  )

  return mongoose.model('comment', schema);
}
