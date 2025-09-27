import express from "express";

const router = express.Router();

const listings = [
  { id: 1, name: "Listing 1", description: "This is listing 1" },
  { id: 2, name: "Listing 2", description: "This is listing 2" },
  { id: 3, name: "Listing 3", description: "This is listing 3" },
];

router.get("/listings", (req, res) => {
  res.json({ data: listings });
});

export default router;
