import {MenuList} from "@/models/menu.interface";
import {LoginParams, LoginResult} from "@/models/login";
import {CurrentUserResult} from "@/models/user";
import {useBatch, useCreate, useGetList, useGetOne, useUpdate} from "./request";
import {mockMenuList} from "../../mock/user";
import {mockComponent} from "react-dom/test-utils";
import {mockProjects} from "../../mock/projects";

const projectResource = '/projects';

export const useLogin = () => {
    return useCreate<LoginParams, LoginResult>("/login");
}

export const useGetCurrentUser = () => {
    return useGetOne<CurrentUserResult>(
        "CurrentUser",
        "/current/user"
    );
}

export const useGetCurrentMenus = () => {
    return {data: mockMenuList, error: {}}

}
export const useGetProjects = (pagination: any, filters: any) => {
    return {
        data: mockProjects,
        error: null,
        isLoading: false,
        refetch: () => {
        }
    };
}
export const useAddProject = () => {
    return useCreate<API.Project, API.Project>(projectResource);
}

export const useUpdateProject = () => {
    return useUpdate<API.Project>(projectResource);
}

export const useBatchDeleteProject = () => {
    return useBatch(projectResource + ':batchDelete');
}
