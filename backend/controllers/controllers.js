import { Schema } from "../models/model.js";

const get = async (req, res) => {
    res.send("Hii");
};

const sell = async (req, res) => {
    const { title, price, imageUrl } = req.body;
    console.log(title, price, imageUrl);

    Schema.create({ title, price, imageUrl })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
};

export { get, sell };
