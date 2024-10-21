import express from 'express';
import Page from "../model/models/Page.js";
import Workspace from "../model/models/Workspace.js";

const router = express.Router()

/* --- Workspace --- */

router.get('/api/workspace/:workspaceId', async (req, res) => {
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

router.post('/api/add-workspace', async (req, res) => {
    try {
        const newWorkspace = await Workspace.create({name: req.body.name})
        newWorkspace.save()
        res.json(newWorkspace)
    } catch (e) {
        console.log(e)
    }
})

router.put('/api/update-workspace/:workspaceId', async (req, res) => {
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

router.delete('/api/delete-workspace/:workspaceId', async (req, res) => {
    try {
        await Workspace.deleteOne({_id: req.params.workspaceId})
        res.json({message: 'Workspace deleted successfully'})
    } catch (e) {
        console.log(e)
    }
})

/* --- Page --- */

router.get('/api/page/:pageId', async (req, res) => {
    try {
        res.json(await Page.findById(req.params.pageId));
    } catch (e) {
        console.log(e)
    }
})

router.get('/api/pages/:workspaceId', async (req, res) => {
    try {
        const workspace = await Workspace.findById(req.params.workspaceId)
        const pages = []
        for (let pageId in workspace.pageIds) {
            pages.push(await Page.findById(pageId))
        }
        res.json(pages)
    } catch (e) {
        console.log(e);
    }
})

router.post('/api/add-page/:workspaceId', async (req, res) => {
    try {
        const newPage = await Page.create({name: req.body.name})
        newPage.save()
        await Workspace.updateOne({_id: req.params.workspaceId}, {$push: {pageIds: newPage._id}})
        res.json(newPage)
    } catch (e) {
        console.log(e)
    }
})

router.put('/api/update-page/:pageId', async (req, res) => {
    try {
        await Page.updateOne({_id: req.params.pageId}, {$set: {name: req.body.name, content: req.body.content}})
        res.json({message: 'Workspace updated successfully'})
    } catch (e) {
        console.log(e)
    }
})

router.delete('/api/delete-page/:pageId', async (req, res) => {
    try {
        await Workspace.deleteOne({_id: req.params.pageId})
        res.json({message: 'Workspace deleted successfully'})
    } catch (e) {
        console.log(e)
    }
})

export default router