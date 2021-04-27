

export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PhotoListSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    photoContent: {
      type: mongoose.ObjectId,
      ref: 'Photo',
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
  });

  return mongoose.model('PhotoList', PhotoListSchema, 'photoList');
};
