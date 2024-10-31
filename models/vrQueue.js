const mongoose = require('mongoose');

const vrQueueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    platform: { type: String, required: true },
    game: { type: String, required: true },
    players: [{ 
      user: { type: String, required: true },
      dateTime: { type: Date, default: Date.now },
      positionFila: { type: Number, required: true },
      console: { type: String, required: true }
    }]
  });
  

const VRQueue = mongoose.model('VRQueue', vrQueueSchema);
module.exports = VRQueue;