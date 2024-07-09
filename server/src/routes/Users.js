import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
	try {
		const { username, password } = req.body

		const user = await UserModel.findOne({ username })

		if (user) {
			return res.status(400).json({ message: "Пользователь уже существует" })
		}

		const hashPassword = await bcrypt.hash(password, 10)
		const newUser = new UserModel({ username, password: hashPassword })
		await newUser.save()

		res.status(201).json({ message: "Пользователь зарегистрирован успешно!" })

	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Ошибка сервера" })
	}
})

const JWT_SECRET = process.env.JWT_SECRET || 'hellowiejjeijeoioeoej'

router.post('/login', async (req, res) => {
	try {
		const { username, password } = req.body

		const user = await UserModel.findOne({ username })
		if (!user) {
			return res.status(400).json({ message: "Неверное имя пользователя или пароль" })
		}

		const isPasswordValid = await bcrypt.compare(password, user.password)
		if (!isPasswordValid) {
			return res.status(400).json({ message: "Неверное имя пользователя или пароль" })
		}

		const token = jwt.sign({ id: user._id, username: user.username, }, JWT_SECRET, { expiresIn: '1h' })

		return res.status(200).json({ message: "Вход выполнен успешно", token })
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Ошибка сервера" })
	}
})

export { router as userRouter };