

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const ArticleSchema = new Schema({
    author: {
      type: String,
      required: true,
      default: '',
    },
    book: {
      type: String,
      required: true,
      default: '',
    },
    content: {
      type: String,
      required: false,
      default: '',
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
      default: '',
    },
  }, {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
  );

  return mongoose.model('Sentence', ArticleSchema, 'sentence');
};
