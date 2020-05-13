

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    introduce: {
      type: String,
      required: true,
    },
    phototime: {
      type: String,
      required: true,
    },
    address: {
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

  return mongoose.model('Photo', ArticleSchema, 'zl-photo');
};
