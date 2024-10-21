import axios from "axios";

/* Workspace Api */

export const getWorkspace = async (workspaceId: string) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/workspace/${workspaceId}`)
        console.log(res);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const getWorkspaces = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/workspaces`)
        console.log(res);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const addWorkspace = (name: string) => {
    axios.post('http://localhost:3000/api/add-workspace', {name: name})
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updateWorkspace = (workspaceId: string) => {
    axios.put(`http://localhost:3000/api/update-workspace/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const deleteWorkspace = (workspaceId: string) => {
    axios.delete(`http://localhost:3000/api/delete-workspace/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

/* Page Api */

export const getPage = async (pageId: string) => {
    try {
        const res = await axios.get(`http://localhost:3000/page/${pageId}`)
        console.log(res);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const getPages = async () => {
    try {
        const res = await axios.get('http://localhost:3000/pages')
        console.log(res);
        return res.data;
    } catch (e) {
        console.log(e);
    }

}

export const addPage = (workspaceId: string) => {
    axios.post(`http://localhost:3000/api/add-page/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updatePage = (pageId: string) => {
    axios.put(`http://localhost:3000/api/update-page/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const deletePage = (pageId: string) => {
    axios.delete(`http://localhost:3000/api/delete-page/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}
