

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const TagSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    status: {
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

  return mongoose.model('Tag', TagSchema, 'articleTags');
};
