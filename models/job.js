
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    startTime: {
      type: String,
      required: true
    },

    endTime: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ''
    },

    clientName: {
      type: String,
      required: true
    },

    clientPhone: {
      type: String,
      required: true
    },

    status: {
      type: String,
      default: 'Pending'
    },


assignedWorker: {
  type: String,
  default: null
},

clockInAt: {
  type: Date,
  default: null
},

clockOutAt: {
  type: Date,
  default: null
}


  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Job', jobSchema);
