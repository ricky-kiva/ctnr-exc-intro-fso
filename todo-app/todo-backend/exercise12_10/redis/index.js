const redis = require('redis');
const { promisify } = require('util');
const { REDIS_URL } = require('../util/config');

let getAsync
let setAsync

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {
  const client = redis.createClient(REDIS_URL);
    
  getAsync = promisify(client.get).bind(client);
  setAsync = promisify(client.set).bind(client);
  
  client.on('connect', async () => {
    const addedTodos = await getAsync('added_todos');
  
    if (addedTodos === null) {
      await setAsync('added_todos', 0);
    }
  });
}

module.exports = {
  getAsync,
  setAsync
}