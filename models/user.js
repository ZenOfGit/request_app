const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    uClientCode: {
        type: String,
        required: true
    },    
    uFirstName: {
        type: String,
        required: true
    },
    uMiddleName: {
        type: String,
    },
    uLastName: {
        type: String,
        required: true
    },
    uEmailAddress: {
        type: String,
        required: true
    },
    uTitle: {
        type: String
    },
    uAddressLine1: {
        type: String,
    },
    uAddressLine2: {
        type: String
    },
    uCity: {
        type: String,      
    },
    uState: {
        type: String,      
    },
    uZip: {
        type: String,       
    },
    uZip4: {
        type: String     
    },
    uWorkPhone: {
        type: String,
    },
    uFax: {
        type: String
    },
    uCellPhone: {
        type: String
    },
    crmAccess: {
        type: Boolean
    },
    crmAccessLevel: {
        type: String
    },
    mAAccess: {
        type: Boolean
    },
    mAClientId: {
        type: String
    },
    emailAccess: {
        type: Boolean
    },
    emailAccessLevel: {
        type: String
    },
    prmAccess: {
        type: Boolean
    },
    prmAccessLevel: {
        type: String
    },
    claimsAccess: {
        type: Boolean
    },
    pDC: {
        type: Boolean
    },
    pAndF: {
        type: Boolean
    },
    uAllTools: {
        type: Boolean
    },
    aSCName: {
        type: String
    },
    aSCEmail: {
        type: String
    }
});

// Export the user object
const User = module.exports = mongoose.model('User', userSchema);

// Get Users function (access from the route)
module.exports.getUsers = (callback, limit) => {
        User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

// Add User
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

// Update User
module.exports.updateUser = (id, user, options, callback) => {
    let query = {_id: id};
    let update = {
        uClientCode: user.uClientCode,
		uFirstName: user.uFirstName,
		uMiddleName: user.uMiddleName,
		uLastName: user.uLastName,
		uEmailAddress: user.uEmailAddress,
		uTitle: user.uTitle,
		uAddressLine1: user.uAddressLine1,
		uAddressLine2: user.uAddressLine2,
		uCity: user.uCity,
		uState: user.uState,
		uZip: user.uZip,
        uZip4: user.uZip4,
		uWorkPhone: user.uWorkPhone,
		uFax: user.uFax,
		uCell: user.uCell,
		crmAccess: user.crmAccess,
        crmAccessLevel: user.crmAccessLevel,
		mAAccess: user.mAAccess,
		mAClientId: user.mAClientId,
		emailAccess: user.emailAccess,
		emailAccessLevel: user.emailAccessLevel,
		prmAccess: user.prmAccess,
		prmAccessLevel: user.prmAccessLevel,
		claimsAccess: user.claimsAccess,
		pDC: user.pDC,
        pAndF: user.pAndF,
        uAllTools: user.uAllTools,
        aSCName: user.aSCName,
        aSCEmail: user.aSCEmail
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = (id, callback) => {
    let query = {_id: id};
	User.deleteOne(query, callback);
}