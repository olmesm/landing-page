import path from "path";
import fs from "fs";

export const mkdirp = (outFile) => {
	fs.mkdirSync(path.dirname(outFile), {
		recursive: true,
	});
};

export const write = (outFile, data) => {
	mkdirp(outFile);

	return fs.writeFileSync(outFile, data, "utf8");
};
