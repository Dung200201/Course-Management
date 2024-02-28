const mongoose = require('mongoose');

const slug = require('mongoose-slug-updater');
var mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true},
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  }, {
    timestamps: true,
  });

  //Add plugin
mongoose.plugin(slug);


Course.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all', 
});

module.exports = mongoose.model('Course', Course);
