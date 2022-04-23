'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var playersSchema = Schema( {
  userId: ObjectId,
  ratingId: ObjectId,
} );

module.exports = mongoose.model( 'Players', playersSchema );
