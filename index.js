require('dotenv').config();
const fs = require('fs');
const mqtt = require('mqtt');
const { exec } = require("child_process");
const hostname = process.env.HOSTNAME
const host = process.env.MQTT_SERVER
const port = process.env.PORT
const clientId = `health2mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  reconnectPeriod: 5000,
});

client.on('connect', () => {
  console.log('Connected to mqtt broker')
});

client.on("reconnect", function () {
  console.log("Reconnection starting");
});

client.on("offline", function () {
  console.log("Currently offline. Please check internet!");
});

client.on("error", function (error) {
  console.log("Error occurred: " + error);
});
 
fs.watchFile(
  '/tmp/cpu',
  {
    bigint: false,
    persistent: true,
    interval: 4000,
  }, 
  (cpu) => {
  let topicCpu = `${hostname}/%cpu`;
  let value = fs.readFileSync("/tmp/cpu", "utf8");
  if (cpu) {
     client.publish(topicCpu, value,);
     console.log(`${topicCpu} ${value}`);
   } else{
     console.log("file not found");
   }
});

fs.watchFile(
  '/tmp/ram',
  {
    bigint: false,
    persistent: true,
    interval: 4000,
  }, 
  (ram) => {
  let topicRam = `${hostname}/%ram`;
  let value = fs.readFileSync("/tmp/ram", "utf8");
  if (ram) {
     client.publish(topicRam, value,);
     console.log(`${topicRam} ${value}`);
   } else{
     console.log("file not found");
   }
});
    
fs.watchFile(
  '/tmp/disc',
  {
    bigint: false,
    persistent: true,
    interval: 4000,
  }, 
  (disc) => {
  let topicDisc = `${hostname}/%disc`;
  let value = fs.readFileSync("/tmp/disc", "utf8");
  if (disc) {
     client.publish(topicDisc, value,);
     console.log(`${topicDisc} ${value}`);
   } else{
     console.log("file not found");
   }
});

fs.watchFile(
  '/tmp/temp',
  {
    bigint: false,
    persistent: true,
    interval: 4000,
  }, 
  (temp) => {
  let topicTemp = `${hostname}/°temp`;
  let value = fs.readFileSync("/tmp/temp", "utf8");
  if (temp) {
     client.publish(topicTemp, value,);
     console.log(`${topicTemp} ${value}`);
   } else{
     console.log("file not found");
   }
});
