# loopback-objectid-mixin

This module is designed for the [Strongloop Loopback](https://github.com/strongloop/loopback) framework. It sets objectId type for model properties. 
## works only with [loopback-connector-mongodb](https://github.com/strongloop/loopback-connector-mongodb) 

## install

```bash
  npm install --save loopback-objectid-mixin
```

## mixinsources

Add the `mixins` property to your `server/model-config.json` like the following:

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../node_modules/loopback-objectid-mixin",
      "../common/mixins"
    ]
  }
}
```

## config

To use with your Models add the `mixins` attribute to the definition object of your model config.

```json
  {
    "name": "Product",
    "properties": {},
    "mixins": {
      "ObjectidType": {
         "properties": ["userId"]
       }
    }
  }
```

**options**

| option | type | description | required |
| ------ | ---- | ----------- | -------- |
|properties| [String] | properties which you want to set objectId type | true |





