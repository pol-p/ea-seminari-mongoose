import { model, Schema, Types } from "mongoose";


export interface IProject{
    _id?: string;
    title: string;
    description: string;
    organization: Types.ObjectId | string;
}

const projectSchema = new Schema<IProject>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    organization: {type: Schema.Types.ObjectId, ref: 'Organization'}
});

export const ProjectModel = model<IProject>('Project', projectSchema)