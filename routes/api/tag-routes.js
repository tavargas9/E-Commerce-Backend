const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      attributes: ["id", "tag_name"],
      include: [{
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: "ProductTag",
      }, ],
    });
    res.json(tags);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = await Tag.findByPk(req.params.id, {
			include: [{
				model: Product,
				attributes: ["id", "product_name", "price", "stock", "category_id"],
				through: "ProductTag",
			}],
		});
    res.json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
