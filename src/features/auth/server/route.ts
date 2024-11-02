import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { logInSchema } from '../schemas'

const app = new Hono()
    .post('/login', zValidator('json', logInSchema), (c) => {
        const { email, password } = c.req.valid('json')
        console.log(email, password)
        return c.json({ success: "ok" })
    })
    .get('/profile/:username', (c) => {
        const { username } = c.req.param()
        return c.json({ success: "ok", username: username.toUpperCase(), userType: "admin" })
    })

export default app
