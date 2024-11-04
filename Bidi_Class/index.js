module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))