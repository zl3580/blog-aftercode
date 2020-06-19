

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PhotoSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  });
  const ArticleSchema = new Schema({
    imgs: [ PhotoSchema ],
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

  return mongoose.model('Photo', ArticleSchema, 'photo');
};
