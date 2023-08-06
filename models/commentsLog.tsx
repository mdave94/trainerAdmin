class CommentsLog {
  constructor(
    public id: string,
    public date: Date,
    public commentText: string
  ) {
    this.id = id;
    this.date = date;
    this.commentText = commentText;
  }
}

export default CommentsLog;
