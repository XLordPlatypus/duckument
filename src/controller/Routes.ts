import express from 'express';
import Page from "../model/models/Page.js";
import Workspace from "../model/models/Workspace.js";

const router = express.Router()

/* --- Workspace --- */

router.get('/api/workspaces/:workspaceId', async (req, res) => {
    try {
        res.json(await Workspace.findById(req.params.workspaceId))
    } catch (e) {
        console.log(e)
    }
})

router.get('/api/workspaces', async (_req, res) => {
    try {
        res.json(await Workspace.find())
    } catch (e) {
        console.log(e)
    }
})

router.post('/api/workspaces', async (req, res) => {
    try {
        const newWorkspace = await Workspace.create({name: req.body.name})
        newWorkspace.save()
        res.json("Workspace created successfully.")
    } catch (e) {
        console.log(e)
    }
})

router.put('/api/workspaces/:workspaceId', async (req, res) => {
    try {
        await Workspace.updateOne({_id: req.params.workspaceId}, {
            $set: {
                name: req.body.name, pageIds: req.body.pageIds
            }
        })
        res.json({message: 'Workspace updated successfully'})
    } catch (e) {
        console.log(e)
    }
})

router.delete('/api/workspaces/:workspaceId', async (req, res) => {
    try {
        await Workspace.deleteOne({_id: req.params.workspaceId})
        res.json({message: 'Workspace deleted successfully'})
    } catch (e) {
        console.log(e)
    }
})

/* --- Page --- */

router.get('/api/pages/:pageId', async (req, res) => {
    try {
        res.json(await Page.findById(req.params.pageId));
    } catch (e) {
        console.log(e)
    }
})

router.get('/api/pages', async (req, res) => {
    try {
        const workspaceId = req.query.workspaceId
        if (!workspaceId) {
            res.json(await Page.find())
        } else {
            const filteredPages = []
            const pages = await Page.find()
            const workspace = await Workspace.findById(workspaceId)
            for (const page of pages) {
                for (const pageId of workspace.pageIds) {
                    if (page._id.toString() === pageId.toString()) {
                        filteredPages.push(page)
                    }
                }
            }
            res.json(filteredPages)
        }

    } catch (e) {
        console.log(e);
    }
})

router.post('/api/pages', async (req, res) => {
    try {
        const workspaceId = req.query.workspaceId
        if (!workspaceId) {
            const newPage = await Page.create({name: req.body.name})
            newPage.save()
            res.json("Page created successfully without update")
        } else {
            const newPage = await Page.create({name: req.body.name})
            newPage.save()
            await Workspace.updateOne({_id: workspaceId}, {$push: {pageIds: newPage._id}})
            res.json("Page created successfully with update")
        }
    } catch (e) {
        console.log(e)
    }
})

router.put('/api/pages/:pageId', async (req, res) => {
    try {
        await Page.updateOne({_id: req.params.pageId}, {$set: {name: req.body.name, content: req.body.content}})
        res.json({message: 'Workspace updated successfully'})
    } catch (e) {
        console.log(e)
    }
})

router.delete('/api/pages/:pageId', async (req, res) => {
    try {
        await Workspace.deleteOne({_id: req.params.pageId})
        res.json({message: 'Workspace deleted successfully'})
    } catch (e) {
        console.log(e)
    }
})

export default router