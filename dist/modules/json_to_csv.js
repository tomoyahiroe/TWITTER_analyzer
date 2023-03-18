"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToCsv = void 0;
function jsonToCsv(styledObjects) {
    const header = Object.keys(styledObjects[0]).join(",") + "\n";
    let body = [];
    for (let i = 0; i < styledObjects.length; i++) {
        const objectElement = styledObjects[i];
        objectElement.text = objectElement.text?.split(",").join(" ") || "";
        const objectElementValues = Object.values(objectElement);
        const element = objectElementValues.join(",").replace(/\n/g, "\\n");
        body.push(element);
    }
    return header + body.join("\n");
}
exports.jsonToCsv = jsonToCsv;
//# sourceMappingURL=json_to_csv.js.map