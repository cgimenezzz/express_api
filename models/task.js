'use strict';

let moment = require('moment');

module.exports = (db) => {
		let mongoose = db.mongoose,
			taskSchema = new db.schema({
				name: {
                    type: String,
                    required: [true, 'name is required']
                },
				date: {
					type: Date,
					required: [true, 'date is required'],
					default: moment()
				}
            });
            
        return mongoose.model('task', taskSchema);
};