import fs from "fs";
import pdf from "pdf-creator-node";
import writeHtml from "../utils/getHtmlMarkup.js";

const htmlConversion = async (req, res) => {
  const {htmlMarkup} = req.body;
  let htmlFile = await writeHtml(htmlMarkup);

  if (htmlFile) {
    var html = fs.readFileSync("pdfOutput.html", "utf8");

    var options = {
      format: "A4",
      orientation: "portrait",
      border: "10mm",
    };
    var users = [
      {
        name: "Shyam",
        age: "26",
        email: "email@example.com",
      },
      {
        name: "Navjot",
        age: "26",
        email: "email@example.com",
      },
      {
        name: "Vitthal",
        age: "26",
        email: "email@example.com",
      },
    ];
    var document = {
      html: html,
      data: {
        title: "Aquilla360",
        users: users,
      },
      path: "./output.pdf",
      type: "buffer",
    };
    let response = await pdf.create(document, options);
    if (response) {
          let pdf = response.toString("base64");
      
      res.json({pdf})
    }
  }
};

export { htmlConversion };
