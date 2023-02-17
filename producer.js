const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'producer',
    brokers: ['localhost:9092', 'localhost:9093']
})

const producer = kafka.producer()

const produceMessage = async () =>{
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello Test user!' },
        ],
    })
}

module.exports.run = async () => {
    // Producing
    await producer.connect()
    setInterval(()=>{
        produceMessage()
    },1000)
}
