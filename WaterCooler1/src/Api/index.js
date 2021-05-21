import axios from 'axios'
import https from 'https'

const api = axios.create({
    baseURL: 'https://2pl9c6g1m8.execute-api.us-east-1.amazonaws.com/',
    hostname: 'https://2pl9c6g1m8.execute-api.us-east-1.amazonaws.com/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

export const getEmployee = id => api.get(`/members/detail/${id}`)
export const getDepartment = id => api.get(`/departments/detail/${id}`)
export const getAllEmployees = () => api.get(`/members/all`)
export const getAllDepartments = () => api.get(`/departments/all`)
export const updateEmployeeAbout = (id, payload) => api.post(`/members/${id}/updateAbout`, payload)
export const updateDepartmentName = (id, payload) => api.post(`/departments/${id}/updateName`, payload)
export const addEmployeeToDepartment = (id, payload) => api.post(`/departments/${id}/addMember`, payload)
export const removeEmployeeFromDepartment = (id, payload) => api.post(`/departments/${id}/removeMember`, payload)
export const createEmployee = payload => api.post(`/members/create`, payload)
export const createDepartment = payload => api.post(`/departments/create`, payload)
export const deleteEmployee = id => api.delete(`/members/${id}/delete`)
export const deleteDepartment = id => api.delete(`/departments/${id}/delete`)

const apis = {
    getEmployee,
    getDepartment,
    getAllEmployees,
    getAllDepartments,
    updateEmployeeAbout,
    updateDepartmentName,
    addEmployeeToDepartment,
    removeEmployeeFromDepartment,
    createEmployee,
    createDepartment,
    deleteEmployee,
    deleteDepartment
}

export default apis
