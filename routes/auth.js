const express = require('express')
const router = express.Router()
const yup = require('yup')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authSchema = yup.object().shape({
  username: yup
    .string()
    .required('Missing username')
    .min(4, 'Username should have at least 4 characters'),
  password: yup
    .string()
    .required('Missing password')
    .min(6, 'Password should have at least 6 characters'),
})

router.get('/', async (req, res) => {
  res.send('auth')
})

router.post('/login', async (req, res) => {
  // validate
  authSchema.validate(req.body).catch((err) => {
    const message = err.errors?.[0] || 'Invalid username or password'
    return res.status(400).json({ message })
  })

  // check if user is exist
  const user = await User.findOne({ username: req.body.username })
  if (!user) return res.status(400).json({ message: 'User is not found' })

  // check if password is correct
  const isValidPassword = await bcrypt.compare(req.body.password, user.password)
  if (!isValidPassword) return res.status(400).json({ message: 'Invalid password' })

  const accessToken = jwt.sign({ sub: user.username }, process.env.PRIVATE_KEY)
  res.json({ username: user.username, accessToken })
})

router.post('/signup', async (req, res) => {
  // validate
  authSchema.validate(req.body).catch((err) => {
    const message = err.errors?.[0] || 'Invalid username or password'
    return res.status(400).json({ message })
  })

  // check if user is exist
  const user = await User.findOne({ username: req.body.username })
  if (user) return res.status(400).json({ message: 'Username already exists' })

  // hash password
  const hashPassword = await bcrypt.hash(req.body.password, 10)
  const newUser = new User({
    ...req.body,
    password: hashPassword,
  })

  await newUser.save()

  const accessToken = jwt.sign({ sub: newUser.username }, process.env.PRIVATE_KEY)
  res.json({ username: newUser.username, accessToken })
})

module.exports = router
