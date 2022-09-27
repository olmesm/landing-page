import { write } from "./write.js";
import { readFile } from "fs/promises";
import path from "path";
import { parse } from "yaml";

const LIST_JOINER = "\n  - ";
const THEMES = [
	"indigo-white",
	"green-white",
	"red-white",
	"grey-white",
	"white-indigo",
	"white-blue",
	"white-grey",
	"white-red",
	"yellow-black",
];

const makePath = (...arr) => arr.join(path.sep);
const makeLink = ({ title, icon, url }) => `<a target="_blank" href="${url}">
	<i class="fab ${icon}" aria-hidden="true" title="${title}"></i>
	<span class="sr-only">${title}</span>
</a>`;

const content = readFile(makePath("content.yaml"), "utf-8")
	.then(parse)
	.then((o) =>
		Object.entries(o).reduce((a, [key, value]) => {
			return { ...a, [key.toLocaleUpperCase()]: value };
		}, {})
	);

const template = readFile(makePath("src", "index.html"), "utf-8");

export default Promise.all([content, template])
	.then(([content, template]) => {
		return Object.entries(content).reduce((a, [key, value]) => {
			if (key === "LINKS") {
				return a.replaceAll(`{{${key}}}`, value.map(makeLink).join("\n\n"));
			}

			if (key === "THEME" && !THEMES.includes(value)) {
				throw new Error(
					"Theme not valid, please enter one of the following:" +
						LIST_JOINER +
						THEMES.join(LIST_JOINER)
				);
			}

			return a.replaceAll(`{{${key}}}`, value);
		}, template);
	})
	.then((content) => write(makePath("dist", "index.html"), content))
	.then(() => console.log("[info] Completed"));
