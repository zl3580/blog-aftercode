

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    imgs: {
      type: Array,
      required: true,
    },
    introduce: {
      type: String,
      required: true,
    },
    time: {
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
