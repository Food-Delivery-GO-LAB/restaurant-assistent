import {useMutation} from 'react-query'
import request from "../request";

export const useAddAdmin = () =>
    useMutation(() => request.post('/admin'))