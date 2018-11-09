import Shopping from './shopping.model';
import moment from 'moment';

export async function showCurrent(req, res) {
  try {
    let shopping = await Shopping.findOne({}).sort({ created_at: -1 }).populate('products');

    if(moment().diff(moment(shopping.created_at), 'days') > 4)
      shopping = {};

    return res.status(201).json(shopping);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function addShopping(req, res) {
  try {
    let saveData = await Shopping.create({
      //created_at: moment().format('DD.MM.YYYY'),
      name: req.body.name,
      products: req.body.products,
    });
    let fullInfo = await saveData.populate('products').execPopulate();
    //return res.status(201).json('shopping list has been added');
    return res.status(201).json(fullInfo);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function deleteShopping(req, res) {
  try {
    //let delList = await Shopping.deleteOne({_id: req.params.id});
    let delList = await Shopping.findOneAndDelete({_id: req.params.id});
    res.status(201).json(delList);
    //res.status(201).json(`Shopping list with id ${req.params.id} has been deleted`);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function updateShopping(req, res) {
  try {
    const editInfo = {
      products: req.body.products,
      name: req.body.name,
    };
    const options = { new: true };
    //let shopping = await Shopping.findOneAndUpdate({ _id: req.params.id }, editInfo, options);
    let shopping = await Shopping.findOneAndUpdate({ _id: req.params.id }, {$set: req.body}, options).populate('products');
    res.json(shopping);
    //let ff = await shopping.findOne({ _id: req.params.pid });
    //res.json(ff);
  } catch (err) {
    return res.status(500).json(err);
  }
}