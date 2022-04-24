const fs = require("fs");
const path = require("path");

const imagesPath = path.join(__dirname, "src/assets/avatars");

const renameAllImages = () => {
  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach(file => {
        const oldPath = path.join(imagesPath, file);
        const newPath = path.join(imagesPath, file.replace(" ", ""));
        const name = newPath.split("avatars")[1];

        console.log(
          `case '${name.slice(1)}':\n
        return require("../assets/avatars/${name.slice(1)}");
        `
        );
        fs.rename(oldPath, newPath, err => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  });
};

renameAllImages();
