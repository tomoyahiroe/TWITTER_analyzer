function jsonToCsv(styledObjectsArray) {
  const header = Object.keys(styledObjectsArray[0]).join(",") + "\n";

  let body = [];
  for (let i = 0; i < styledObjectsArray.length; i++) {
    const objectElement = styledObjectsArray[i];
    objectElement.text = objectElement.text.split(",").join(" ");
    const objectElementValues = Object.values(objectElement);
    const element = objectElementValues.join(",").replace(/\n/g, "\\n");
    body.push(element);
  }

  return header + body.join("\n");
}

export { jsonToCsv };
