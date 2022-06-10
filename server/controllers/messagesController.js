let messages = []
let id = 0

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body
    messages.push({
      id,
      text,
      time,
    })
    id++
    res.status(200).send(messages)
  },
  read: (req, res) => {
    res.status(200).send(messages)
  },
  update: (req, res) => {
    const { text } = req.body
    const { id } = req.params
    const mIndex = messages.findIndex(m => (m.id = id))

    let message = messages[mIndex]

    messages[mIndex] = {
      id: message.id,
      text: text,
      time: message.time,
    }

    res.status(201).send(messages)
  },
  del: (req, res) => {
    const { id } = req.params
    const mIndex = messages.findIndex(m => (m.id = id))
    messages.splice(mIndex, 1)
    res.status(200).send(messages)
  },
}
