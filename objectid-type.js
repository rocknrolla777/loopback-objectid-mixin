'use strict';

var debug = require('debug')('loopback:mixins:objectid-type');

module.exports = (Model, options) => {
    var objectId = Model.getDataSource().connector.getDefaultIdType();
    var isMongoConnector = Model.getDataSource().connector.name === 'mongodb';
    var isPropertiesExists = options && options.properties && Array.isArray(options.properties);

    if (!isPropertiesExists) {
        debug('Properties not found for ' + Model.definition.name);
        throw 'Properties not found for ' + Model.definition.name;
    }

    if (isMongoConnector) {
        options.properties.map(propertyKey => {
            Model.defineProperty(propertyKey, {
                type: objectId
            });
        })
    } else {
        throw 'loopback-connector-mongodb not found for current model'
        debug('loopback-connector-mongodb not found for current model');
    }

};
