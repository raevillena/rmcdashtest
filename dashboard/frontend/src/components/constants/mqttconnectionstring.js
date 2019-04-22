const connectionString = {
    host: "18.191.246.19", username: 'rae', password: 'mqttberic', port: 9001, clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
}
module.exports = {
    connectionString: connectionString
}