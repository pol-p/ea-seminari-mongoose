import { IProject, ProjectModel } from "./models/project.js";

export async function createProject(project: IProject) {
    try{
        const pro = await ProjectModel.create(project);
        console.log("Proyecto Guardado", pro);
        return pro;
    }catch(err){
        console.log("Error:", err)
    }
}