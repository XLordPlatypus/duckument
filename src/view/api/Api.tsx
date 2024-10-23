import axios from "axios";

/* Workspace */

export const getWorkspace = async (workspaceId: string) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/workspaces/${workspaceId}`)
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
    axios.post(`http://localhost:3000/api/workspaces`, {name: name})
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updateWorkspace = (workspaceId: string) => {
    axios.put(`http://localhost:3000/api/workspaces/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const deleteWorkspace = (workspaceId: string) => {
    axios.delete(`http://localhost:3000/api/workspaces/${workspaceId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

/* Page */

export const getPage = async (pageId: string) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/pages/${pageId}`)
        console.log(res);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const getPages = async (workspaceId: string | null =  null) => {
    try {
        if (!workspaceId) {
            const res = await axios.get(`http://localhost:3000/api/pages`)
            console.log(res);
            return res.data;
        } else {
            const res = await axios.get(`http://localhost:3000/api/pages`, {
                params:{
                    workspaceId: workspaceId,
                }
            })
            console.log(res);
            return res.data;
        }
    } catch (e) {
        console.log(e);
    }

}

export const addPage = (name: string, workspaceId: string | null = null) => {
    axios.post(`http://localhost:3000/api/pages`, {name: name}, {
        params: {
            workspaceId: workspaceId,
        }
    })
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e)
        })
}

export const updatePage = (pageId: string) => {
    axios.put(`http://localhost:3000/api/pages/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const deletePage = (pageId: string) => {
    axios.delete(`http://localhost:3000/api/pages/${pageId}`)
        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}
