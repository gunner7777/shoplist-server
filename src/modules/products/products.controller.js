import Products from './products.model';

export async function showAllProducts(req, res) {
  try {
    let allProducts = await Products.find({});
    return res.status(201).json(allProducts);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getProduct(req, res) {
  try {
    let product = await Products.findOne({_id: req.params.id});
    res.status(201).json(product);
  } catch (err) {

  }
}

export async function addProduct(req, res) {
  try {
    let savedData = await Products.create({
      name: req.body.name
    });
    //res.status(201).json({'result': 'Product has been saved'});
    res.status(201).json(savedData);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function deleteProduct(req, res) {
  try {
    let deleteProduct = await Products.findOneAndDelete({_id: req.params.id});
    res.status(200).json({ result: `Delete product with id ${req.params.id}` });
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function editProduct(req, res) {
  try {
    let editedInfo = {
      name: req.body.name,
    };

    let result = await Products.findByIdAndUpdate(req.params.id, editedInfo, { new: true });
    res.status(201).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}