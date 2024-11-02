import { Hono } from 'hono'


const app = new Hono()
    .get('/', (c) => {
        return c.json({ success: "ok", workspaceId: "123" })
    })

export default app