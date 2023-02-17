const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "consumer",
    brokers: ["localhost:9092", "localhost:9093"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

module.exports.run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            });
        },
    });
};


