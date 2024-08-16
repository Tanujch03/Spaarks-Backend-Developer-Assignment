import mongoose from 'mongoose';
const { Schema } = mongoose;

// Grade Schema for nested grades array
const gradeSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

// Address Schema for nested address object
const addressSchema = new Schema({
  building: {
    type: String
  },
  coord: {
    type: [Number],  // Array of numbers [longitude, latitude]
    required: true
  },
  street: {
    type: String
  },
  zipcode: {
    type: String
  }
});

// Main Restaurant Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  address: {
    type: addressSchema,  // Embed the address schema
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  borough: {
    type: String,
    required: true
  },
  grades: {
    type: [gradeSchema],  // Embed the grades schema as an array
    required: true
  }
});

restaurantSchema.index({ "address.coord": "2dsphere" });
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
