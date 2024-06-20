const NodeCache = require('node-cache');
const cache = new NodeCache();

function getFromCache(key) {
    const value = cache.get(key);
    console.log(`Cache get: ${key} -> ${value}`);
    return value;
}

function setInCache(key, value, ttl) {
    cache.set(key, value, ttl);
    console.log(`Cache set: ${key} -> ${value} (TTL: ${ttl})`);
}

function removeFromCache(key) {
    cache.del(key);
    console.log(`Cache del: ${key}`);
}

module.exports = {
    getFromCache,
    setInCache,
    removeFromCache,
};

