// Demo: Circular reference
const o = {}
o.o = o

// Note: cache should not be re-used by repeated calls to JSON.stringify.
var cache = []
JSON.stringify(o, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Duplicate reference found
            try {
                // If this value does not reference a parent it can be deduped
                return JSON.parse(JSON.stringify(value));
            } catch (error) {
                // discard key if value cannot be deduped
                return;
            }
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
})
cache = null // Enable garbage collection
