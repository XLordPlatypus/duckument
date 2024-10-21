import axios from "axios";

/* Workspace Api */

export const getWorkspace = (workspaceId) => {
    axios.get(`http://localhost:3000/api/workspace/${workspaceId}`)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const getWorkspaces = () => {
    axios.get(`http://localhost:3000/api/workspaces`)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const addWorkspace = () => {
    axios.post('http://localhost:3000/api/add-workspace')
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updateWorkspace = (workspaceId) => {
    axios.put(`http://localhost:3000/api/update-workspace/${workspaceId}`)
    .then(res => {
        console.log(res)
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const deleteWorkspace = (workspaceId) => {
    axios.delete(`http://localhost:3000/api/workspace/${workspaceId}`)
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
    axios.get(`http://localhost:3000/page/${pageId}`)
        .then(res => {
            console.log(res);
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getPages = () => {
    axios.get('http://localhost:3000/pages')
        .then(res => {
            console.log(res);
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const addPage = (workspaceId) => {
    axios.post(`http://localhost:3000/api/add-page/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updatePage = (pageId) => {
    axios.put(`http://localhost:3000/api/update-page/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const deletePage = (pageId) => {
    axios.delete(`http://localhost:3000/api/delete-page/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}
