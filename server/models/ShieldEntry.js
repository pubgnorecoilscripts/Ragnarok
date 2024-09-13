const mongoose = require('mongoose');

const ShieldEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  shieldHours: {
    type: Number,
    required: true,
  },
  entryTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ShieldEntry', ShieldEntrySchema);
