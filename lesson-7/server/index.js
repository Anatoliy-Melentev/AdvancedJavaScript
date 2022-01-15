const
  express = require('express'),
  path = require('path'),
  fs = require('fs'),
  app = express(),
  port = 3000,
  catalog_path = path.resolve(__dirname, './data/showcase.json'),
  cart_path = path.resolve(__dirname, './data/cart.json'),
  static_dir = path.resolve(__dirname, '../dist/');

app.use(express.static(static_dir));
app.use(express.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api/', (req, res) => res.send('Сервер API работает!'));

app.get('/api/catalog', (req, res) => {
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    if (err || JSON.parse(data).length <= 0) {
      res.status(500).send(JSON.stringify({success: false, error: err || 'Ошибка загрузки каталога!'}));
    } else {
      res.send(JSON.stringify({ success: true, data: JSON.parse(data) }));
    }
  })
});

app.post('/api/catalog', (req, res) => {
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    if (err || JSON.parse(data).length <= 0) {
      res.status(500).send(JSON.stringify({success: false, error: err || 'Ошибка поиска!'}))
    } else {
      let
        query = req.body.query.replace(/[^a-zA-Z0-9]+/gm, ''),
        result = JSON.parse(data).filter(item => {
          return item.title.toUpperCase().indexOf(query.toUpperCase()) + 1;
        });
      res.send(JSON.stringify({ success: true, data: JSON.parse(result) }));
    }
  })
});

app.get('/api/cart', (req, res) => {
  new Promise((resolve, reject) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
      err
        ? reject('Ошибка загрузки корзины! ' + err )
        : resolve(data);
    });
  })
    .then(cart_data => JSON.parse(cart_data))
    .then(cart_data => {
      return new Promise((resolve, reject) => {
        fs.readFile(catalog_path, 'utf-8', (err, catalog_data) => {
          if (err) reject(JSON.stringify({ success: false, error: 'Ошибка получения товаров корзины! ' + err}));
          else {
            let result = [], cat = JSON.parse(catalog_data);
            if (cat.length > 0) {
              cart_data.forEach(el => result.push(Object.assign(el, cat.find(p => +el.id === +p.id))));
              //console.log(result);
              resolve(result);
            } else reject('В каталоге нет таких товаров!');
          }
        });
      });
    })
    .then(result => res.send(JSON.stringify({ success: true, data: result })))
    .catch(err => res.status(500).send(JSON.stringify({ success: false, error: err})));
});

app.post('/api/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      let cart = JSON.parse(data), idx = cart.findIndex(item => +item.id === +req.body.id);

      if (idx > -1) {
        cart[idx].count += req.body.count;
      } else {
        cart.push(req.body);
      }
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.status(201).send(JSON.stringify({ success: true }));
      })
    } else {
      res.status(500).send(JSON.stringify({ success: false, error: 'Ошибка добавления товара в корзину! ' + err }));
    }
  })
});

app.delete('/api/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      let cart = JSON.parse(data), idx = cart.findIndex(item => +item.id === +req.body.id);

      if (idx > -1) {
        cart[idx].count = req.body.count ? cart[idx].count - +req.body.count : 0;

        if (cart[idx].count <= 0) {
          cart.splice(idx, 1)
        }
      }
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.status(201).send(JSON.stringify({ success: true }));
      })
    } else {
      res.status(500).send(JSON.stringify({ success: false, error: 'Ошибка удаления товара из корзины! ' + err }));
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

