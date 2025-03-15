import mongoose from "mongoose";
import dotenv from "dotenv";
import {Flower} from "./src/models/flower.model";

dotenv.config();

const uri = process.env.MONGO_URI as string;

if (!uri) {
    console.error("Missing MONGO_URI in .env file");
    process.exit(1);
  }
  
  // Koneksi ke MongoDB tanpa opsi lama
  mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Connection error:", err));

const flowers = [
    {
        name: "Rose",
        latin_name: "Rosa",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 5,
        petal_count: 5,
        thorny_stem: true,
        color_variations: [
          "red",
          "pink",
          "white",
          "yellow"
        ],
        climbing_type: "Climber"
      },
      {
        name: "Jasmine",
        latin_name: "Jasminum",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 10,
        petal_count: 5,
        thorny_stem: false,
        color_variations: [
          "white"
        ],
        climbing_type: "Vine"
      },
      {
        name: "Tulip",
        latin_name: "Tulipa",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 6,
        thorny_stem: false,
        color_variations: [
          "red",
          "yellow",
          "purple",
          "pink",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Orchid",
        latin_name: "Orchidaceae",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 10,
        petal_count: 3,
        thorny_stem: false,
        color_variations: [
          "purple",
          "pink",
          "yellow",
          "white"
        ],
        climbing_type: "Epiphyte"
      },
      {
        name: "Hibiscus",
        latin_name: "Hibiscus rosa-sinensis",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 5,
        petal_count: 5,
        thorny_stem: false,
        color_variations: [
          "red",
          "yellow",
          "pink",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Bougainvillea",
        latin_name: "Bougainvillea spectabilis",
        lifespan_minimum_year: 5,
        lifespan_maximum_year: 20,
        petal_count: 3,
        thorny_stem: true,
        color_variations: [
          "purple",
          "pink",
          "orange",
          "white"
        ],
        climbing_type: "Climber"
      },
      {
        name: "Sunflower",
        latin_name: "Helianthus annuus",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 34,
        thorny_stem: false,
        color_variations: [
          "yellow"
        ],
        climbing_type: null
      },
      {
        name: "Daisy",
        latin_name: "Bellis perennis",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 4,
        petal_count: 15,
        thorny_stem: false,
        color_variations: [
          "white",
          "pink",
          "yellow"
        ],
        climbing_type: null
      },
      {
        name: "Lavender",
        latin_name: "Lavandula",
        lifespan_minimum_year: 5,
        lifespan_maximum_year: 7,
        petal_count: 4,
        thorny_stem: false,
        color_variations: [
          "purple"
        ],
        climbing_type: null
      },
      {
        name: "Marigold",
        latin_name: "Tagetes",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 20,
        thorny_stem: false,
        color_variations: [
          "yellow",
          "orange",
          "red"
        ],
        climbing_type: null
      },
      {
        name: "Peony",
        latin_name: "Paeonia",
        lifespan_minimum_year: 10,
        lifespan_maximum_year: 20,
        petal_count: 30,
        thorny_stem: false,
        color_variations: [
          "pink",
          "white",
          "red",
          "yellow"
        ],
        climbing_type: null
      },
      {
        name: "Chrysanthemum",
        latin_name: "Chrysanthemum morifolium",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 5,
        petal_count: 40,
        thorny_stem: false,
        color_variations: [
          "yellow",
          "white",
          "red",
          "purple"
        ],
        climbing_type: null
      },
      {
        name: "Lily",
        latin_name: "Lilium",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 5,
        petal_count: 6,
        thorny_stem: false,
        color_variations: [
          "white",
          "pink",
          "orange",
          "yellow"
        ],
        climbing_type: "Trailing Plant"
      },
      {
        name: "Carnation",
        latin_name: "Dianthus caryophyllus",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 3,
        petal_count: 20,
        thorny_stem: false,
        color_variations: [
          "red",
          "pink",
          "white",
          "yellow"
        ],
        climbing_type: null
      },
      {
        name: "Hydrangea",
        latin_name: "Hydrangea macrophylla",
        lifespan_minimum_year: 5,
        lifespan_maximum_year: 10,
        petal_count: 4,
        thorny_stem: false,
        color_variations: [
          "blue",
          "pink",
          "white",
          "purple"
        ],
        climbing_type: "Climber"
      },
      {
        name: "Daffodil",
        latin_name: "Narcissus",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 5,
        petal_count: 6,
        thorny_stem: false,
        color_variations: [
          "yellow",
          "white",
          "orange"
        ],
        climbing_type: null
      },
      {
        name: "Morning Glory",
        latin_name: "Ipomoea",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 5,
        thorny_stem: false,
        color_variations: [
          "blue",
          "purple",
          "pink",
          "white"
        ],
        climbing_type: "Vine"
      },
      {
        name: "Zinnia",
        latin_name: "Zinnia elegans",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 20,
        thorny_stem: false,
        color_variations: [
          "red",
          "orange",
          "pink",
          "yellow",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Camellia",
        latin_name: "Camellia japonica",
        lifespan_minimum_year: 10,
        lifespan_maximum_year: 100,
        petal_count: 20,
        thorny_stem: false,
        color_variations: [
          "red",
          "pink",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Snapdragon",
        latin_name: "Antirrhinum",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 3,
        petal_count: 5,
        thorny_stem: false,
        color_variations: [
          "red",
          "yellow",
          "pink",
          "white",
          "purple"
        ],
        climbing_type: null
      },
      {
        name: "Lotus",
        latin_name: "Nelumbo nucifera",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 5,
        petal_count: 20,
        thorny_stem: false,
        color_variations: [
          "pink",
          "white",
          "yellow"
        ],
        climbing_type: null
      },
      {
        name: "Bluebell",
        latin_name: "Hyacinthoides non-scripta",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 5,
        petal_count: 6,
        thorny_stem: false,
        color_variations: [
          "blue",
          "purple"
        ],
        climbing_type: null
      },
      {
        name: "Foxglove",
        latin_name: "Digitalis purpurea",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 2,
        petal_count: 20,
        thorny_stem: false,
        color_variations: [
          "purple",
          "pink",
          "white",
          "yellow"
        ],
        climbing_type: null
      },
      {
        name: "Cosmos",
        latin_name: "Cosmos bipinnatus",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 8,
        thorny_stem: false,
        color_variations: [
          "pink",
          "red",
          "yellow",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Poppy",
        latin_name: "Papaver",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 2,
        petal_count: 4,
        thorny_stem: false,
        color_variations: [
          "red",
          "pink",
          "orange",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Sweet Pea",
        latin_name: "Lathyrus odoratus",
        lifespan_minimum_year: 1,
        lifespan_maximum_year: 1,
        petal_count: 5,
        thorny_stem: false,
        color_variations: [
          "pink",
          "purple",
          "white",
          "red"
        ],
        climbing_type: "Climber"
      },
      {
        name: "Begonia",
        latin_name: "Begonia",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 3,
        petal_count: 4,
        thorny_stem: false,
        color_variations: [
          "red",
          "orange",
          "pink",
          "white"
        ],
        climbing_type: "Trailing Plant"
      },
      {
        name: "Anemone",
        latin_name: "Anemone coronaria",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 5,
        petal_count: 6,
        thorny_stem: false,
        color_variations: [
          "blue",
          "red",
          "pink",
          "white"
        ],
        climbing_type: null
      },
      {
        name: "Geranium",
        latin_name: "Pelargonium",
        lifespan_minimum_year: 3,
        lifespan_maximum_year: 5,
        petal_count: 5,
        thorny_stem: false,
        color_variations: [
          "pink",
          "red",
          "white",
          "purple"
        ],
        climbing_type: "Creeper"
      },
      {
        name: "Freesia",
        latin_name: "Freesia",
        lifespan_minimum_year: 2,
        lifespan_maximum_year: 3,
        petal_count: 6,
        thorny_stem: false,
        color_variations: [
          "yellow",
          "white",
          "pink",
          "purple"
        ],
        climbing_type: null
      }
];

async function migrateData() {
  try {
    await Flower.insertMany(flowers);
    console.log("Data migration successful!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    mongoose.connection.close();
  }
}

migrateData();
