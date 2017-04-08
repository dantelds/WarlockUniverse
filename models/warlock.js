exports = module.exports = function(app, mongoose) {

	var warlockSchema = new mongoose.Schema({
		name: 		{ type: String },
		birthdate: 	{ type: String },
		lastname: 	{ type: String },
		school:  	{ type: String },
		sex:            { type: String, enum: ['Male', 'Female'] },
		health: 	{ type: Number },
		magic: 		{ type: Number },
		strength: 	{ type: Number }
	});

	mongoose.model('warlock', warlockSchema);

};
