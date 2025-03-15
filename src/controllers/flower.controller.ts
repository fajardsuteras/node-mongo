import { Request, Response } from "express";
import {Flower} from "../models/flower.model";

class FlowerController {
  async list(req: Request, res: Response) {
    try {
      const { keyword, page = 1, limit = 10 } = req.query;
      
      const pageNumber = parseInt(page as string, 10);
      const limitNumber = parseInt(limit as string, 10);
      const skip = (pageNumber - 1) * limitNumber;

      let filter = {};
      if (keyword) {
        filter = { name: { $regex: keyword, $options: "i" } };
      }

      const flowers = await Flower.find(filter)
        .skip(skip)
        .limit(limitNumber);
      const total = await Flower.countDocuments(filter);

      res.json({
        data: flowers,
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
      });
    } catch (error) {
        res.status(500).json({ 
            message: "Error fetching data", 
            error: JSON.stringify(error, null, 2) // Menampilkan detail error
          });
    }
  }
}

export const flowerController = new FlowerController();
