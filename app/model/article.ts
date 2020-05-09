

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const ArticleSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    status: {
      type: Number,
      required: false,
      default: 0,
    },
    pageview: {
      type: Number,
      required: false,
      default: 0,
    },
  }, {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
  );

  return mongoose.model('Article', ArticleSchema, 'zl-article');
};
