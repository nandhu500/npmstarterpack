# npmstarterpack

npmstarterpack is a nodejs library which include major libraries like express, body-parser and cors .This package simplifies the api development

## Installation

<!-- Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar. -->

```bash
npm i npmstarterpack
```

## Usage

```js
const app = require("npmstarterpack");
app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
});
app.listen(3000);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
