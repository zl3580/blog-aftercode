

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const ArticleSchema = new Schema({
    author: {
      type: String,
      required: true,
    },
    book: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    status: {
      type: Number,
      required: false,
      default: 0,
    },
    time: {
      type: String,
      required: false,
      default: 0,
    },
    bgImg: {
      type: Object,
      required: false,
    },
  }, {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
  );

  return mongoose.model('Sentence', ArticleSchema, 'zl-sentence');
};
