import * as DB from "../../db";

export const findAllPro = (req, res) => {
  return res.json({
    ok: true,
    data: DB.findAll(),
  });
};

export const findOnePro = (req, res) => {
  const { id } = req.params;

  return res.json({
    ok: true,
    data: DB.findOnePro(id),
  });
};

export const createPro = (req, res) => {
  const { body } = req;

  DB.storePro(body);

  return res.status(201).json({
    ok: true,
    data: "Product created",
  });
};

export const updatePro = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  DB.updatePro(id, body);

  return res.json({
    ok: true,
    data: "Product updated",
  });
};

export const removePro = (req, res) => {
  const { id } = req.params;

  DB.removePro(id);

  return res.json({
    ok: true,
    data: "Product deleted",
  });
};