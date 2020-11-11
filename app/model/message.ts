

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const MessageSchema = new Schema({
    content: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    ip: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    status: {
      type: Number,
      required: false,
      default: 1,
    },
  }, {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
  );

  return mongoose.model('Message', MessageSchema, 'message');
};
