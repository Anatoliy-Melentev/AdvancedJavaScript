const
  express = require('express'),
  path = require('path'),
  fs = require('fs'),
  app = express();
const {response} = require("express");

const
  port = 3000,
  catalog_path = path.resolve(__dirname, './data/showcase.json'),
  cart_path = path.resolve(__dirname, './data/cart.json'),
  static_dir = path.resolve(__dirname, './public/');

app.use(express.static(static_dir));
app.use(express.json());

app.get('/api/', (req, res) => res.send('Сервер работает!'));

app.get('/api/catalog', (req, res) => {
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    err ? res.status(500).send(err) : res.send(data);
  })
})

app.get('/api/cart', (req, res) => {
  new Promise((resolve, reject) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
      err ? reject(err) : resolve(data)
    });
  })
  .then(cart_data => JSON.parse(cart_data))
  .then(cart_data => {
    return new Promise((resolve, reject) => {
      fs.readFile(catalog_path, 'utf-8', (err, catalog_data) => {
        if (err) {
          reject(err)
        } else {
          let result = [],
            cat = JSON.parse(catalog_data);
          if (cat.length > 0) {
            cart_data.forEach(el => result.push(Object.assign(el, cat.find(p => el.id === p.id))));
          }
          resolve(result);
        }
      });
    });
  }).then(response => res.send(response)).catch(err => console.error(err));
});

app.post('/api/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      const cart = JSON.parse(data);

      let idx = cart.findIndex(item => +item.id === +req.body.id);

      if (idx > -1) {
        cart[idx].count += req.body.count;
      } else {
        cart.push(req.body);
      }
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.status(201).send(JSON.stringify({ success: true }));
      })
    } else {
      res.status(500).send({ success: false, error: err });
    }
  })
});

app.delete('/api/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      const cart = JSON.parse(data);

      let idx = cart.findIndex(item => +item.id === +req.body.id);

      if (idx > -1) {
        if (req.body.reduce && +req.body.reduce === 1) {
          cart[idx].count--;
        } else {
          cart[idx].count = 0;
        }

        if (cart[idx].count <= 0) {
          cart.splice(idx, 1)
        }
      }
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.status(201).send(JSON.stringify({ success: true }));
      })
    } else {
      res.status(500).send({ success: false, error: err });
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

