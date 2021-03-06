

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PhotoSchema = new Schema({
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
    city: {
      type: String,
      required: true,
    },
    imgs: {
      type: Array,
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

  return mongoose.model('Photo', PhotoSchema, 'photo');
};
