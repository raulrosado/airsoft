import { model, models, Schema } from "mongoose";
import mongoose from "mongoose";

 
const Events = mongoose.Schema(
    {
        id_user: String,
        titulo:String,
        descripcion: String,
        fecha: String,
        img: String,
        pais: String,
        localizacion: String
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: true,
            transform: (_, ret) => {
                delete ret._id;
            },
        },
    }
);
export default mongoose.models.Events || mongoose.model("Events", Events);