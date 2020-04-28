

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const ArticleSchema = new Schema({
    // 修改和新增用到，规定字段得类型和其他条件等
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
    },
    pageview: {
      type: Number,
      required: false,
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
