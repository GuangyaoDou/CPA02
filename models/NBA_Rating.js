'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var ratingSchema = Schema({
    full_name: String,
    rating: Number,
    jersey: String,
    team: String,
    position: String,
    b_day: String,
    height: String,
    weight: String,
    salary: String,
    country: String,
    draft_year: Number,
    draft_round: Mixed,
    draft_peak: Mixed,
    college: String,
    version: String,
});

module.exports = mongoose.model('NBA_Rating', ratingSchema);