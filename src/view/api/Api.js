import axios from "axios";

/* Workspace Api */

export const getWorkspace = (workspaceId) => {
    axios.get(`/api/workspace/${workspaceId}`)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const getWorkspaces = () => {
    axios.get(`/api/workspaces`)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const addWorkspace = () => {
    axios.post('/api/add-workspace')
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updateWorkspace = (workspaceId) => {
    axios.put(`/api/update-workspace/${workspaceId}`)
    .then(res => {
        console.log(res)
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const deleteWorkspace = (workspaceId) => {
    axios.delete(`/api/workspace/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

/* Page Api */

export const getPage = (pageId) => {
    axios.get(`/page/${pageId}`)
        .then(res => {
            console.log(res);
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getPages = () => {
    axios.get('/pages')
        .then(res => {
            console.log(res);
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const addPage = (workspaceId) => {
    axios.post(`/api/add-page/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updatePage = (pageId) => {
    axios.put(`/api/update-page/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const deletePage = (pageId) => {
    axios.delete(`/api/delete-page/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}
