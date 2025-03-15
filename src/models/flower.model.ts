import mongoose, { Schema, Document, model } from "mongoose";
import * as yup from "yup";

interface Flower extends Document {
  name: string;
  latin_name: string;
  lifespan_minimum_year: number;
  lifespan_maximum_year: number;
  petal_count: number;
  thorny_stem: boolean;
  color_variations: string[];
  climbing_type?: "Epiphyte" | "Climber" | "Non-Climber" | null;
}

// Yup Validation Schema
const flowerValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  latin_name: yup.string().required("Latin name is required"),
  lifespan_minimum_year: yup
    .number()
    .required("Lifespan minimum year is required")
    .positive("Must be a positive number"),
  lifespan_maximum_year: yup
    .number()
    .required("Lifespan maximum year is required")
    .positive("Must be a positive number"),
  petal_count: yup
    .number()
    .required("Petal count is required")
    .integer("Must be an integer"),
  thorny_stem: yup.boolean().required("Thorny stem is required"),
  color_variations: yup.array().of(yup.string()).required("Color variations are required"),
  climbing_type: yup
    .string()
    .oneOf(["Epiphyte", "Climber", "Non-Climber"], "Invalid climbing type")
    .nullable()
    .defined(),
});

const flowerSchema = new Schema<Flower>({
  name: { type: String, required: true },
  latin_name: { type: String, required: true, unique: true },
  lifespan_minimum_year: { type: Number, required: true },
  lifespan_maximum_year: { type: Number, required: true },
  petal_count: { type: Number, required: true },
  thorny_stem: { type: Boolean, required: true },
  color_variations: { type: [String], required: true },
  climbing_type: { type: String, enum: ["Epiphyte", "Climber", "Non-Climber"], default: null },
});

const Flower = model<Flower>("Flower", flowerSchema);

export { Flower, flowerValidationSchema };