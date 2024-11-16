/**
 * xlsx-js-style
 */
const pkg = require("./package.json");
const gulp = require("gulp"),
	concat = require("gulp-concat"),
	ignore = require("gulp-ignore"),
	insert = require("gulp-insert"),
	replace = require("gulp-replace"),
	source = require("gulp-sourcemaps"),
	uglify = require("gulp-uglify"),
	terser = require("gulp-terser");

gulp.task("min", () => {
	return gulp
		.src(["./src/xlsx.js"])
		.pipe(concat("xlsx.min.cjs"))
		.pipe(uglify())
		.pipe(replace("./dist/cpexcel.js", "./cpexcel.js"))
		.pipe(insert.prepend("/* xlsx-js-style " + pkg.version + " @ " + new Date().toISOString() + " */\n"))
		.pipe(source.init())
		.pipe(ignore.exclude(["**/*.map"]))
		.pipe(source.write("./"))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("min-esm", () => {
	return gulp
		.src(["./src/xlsx.mjs"])
		.pipe(concat("xlsx.min.mjs"))
		.pipe(terser())
		.pipe(replace("./dist/cpexcel.js", "./cpexcel.js"))
		.pipe(insert.prepend("/* xlsx-js-style " + pkg.version + " @ " + new Date().toISOString() + " */\n"))
		.pipe(source.init())
		.pipe(ignore.exclude(["**/*.map"]))
		.pipe(source.write("./"))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("full", () => {
	return gulp
		.src(["./src/xlsx.js"])
		.pipe(concat("xlsx.cjs"))
		.pipe(replace("./dist/cpexcel.js", "./cpexcel.js"))
		.pipe(insert.prepend("/* xlsx-js-style " + pkg.version + " @ " + new Date().toISOString() + " */\n"))
		.pipe(ignore.exclude(["**/*.map"]))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("full-esm", () => {
	return gulp
		.src(["./src/xlsx.mjs"])
		.pipe(concat("xlsx.mjs"))
		.pipe(replace("./dist/cpexcel.js", "./cpexcel.js"))
		.pipe(insert.prepend("/* xlsx-js-style " + pkg.version + " @ " + new Date().toISOString() + " */\n"))
		.pipe(ignore.exclude(["**/*.map"]))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("nodeDemo", (done) => {
	const copyPackageJS = () => {
		return gulp.src("./dist/*.cjs")
			.pipe(gulp.dest("./demos/node/node_modules/xlsx-js-style/dist"));
	};

	const copyESMPackageJS = () => {
		return gulp.src("./dist/*.mjs")
			.pipe(gulp.dest("./demos/node/node_modules/xlsx-js-style/dist"));
	};

	const copyCpexcelJS = () => {
		return gulp.src("./dist/cpexcel.js")
			.pipe(gulp.dest("./demos/node/node_modules/xlsx-js-style/dist"));
	};

	const copyPackageJson = () => {
		return gulp.src("./package.json")
			.pipe(gulp.dest("./demos/node/node_modules/xlsx-js-style/"));
	};

	// Running both copy tasks in parallel
	gulp.parallel(copyPackageJS, copyESMPackageJS, copyCpexcelJS, copyPackageJson)();
	done();
});

gulp.task("test", (done) => {
	const copyPackageJS = () => {
		return gulp.src("./dist/*.cjs")
			.pipe(gulp.dest("./tests/node_modules/xlsx-js-style/dist"));
	};

	const copyESMPackageJS = () => {
		return gulp.src("./dist/*.mjs")
			.pipe(gulp.dest("./tests/node_modules/xlsx-js-style/dist"));
	};

	const copyCpexcelJS = () => {
		return gulp.src("./dist/cpexcel.js")
			.pipe(gulp.dest("./tests/node_modules/xlsx-js-style/dist"));
	};

	const copyPackageJson = () => {
		return gulp.src("./package.json")
			.pipe(gulp.dest("./tests/node_modules/xlsx-js-style/"));
	};

	// Running both copy tasks in parallel
	gulp.parallel(copyPackageJS, copyESMPackageJS, copyCpexcelJS, copyPackageJson)();
	done();
});


// Build/Deploy (ad-hoc, no watch)
gulp.task("ship", gulp.series("full", "min", "nodeDemo", "test"), () => {
	console.log("... ./dist/*.js files created!");
});
gulp.task("ship-esm", gulp.series("full-esm", "min-esm", "nodeDemo", "test"), () => {
	console.log("... ./dist/*.mjs files created!");
});
gulp.task("ship-full", gulp.series("ship", "ship-esm"), () => {
	console.log("... ./dist/ files created!");
});

gulp.task("watch", () => {
	gulp.watch(["./src/xlsx.js", "./libs/*.js"], gulp.series("ship"));
});

gulp.task("watch-esm", () => {
	gulp.watch(["./src/xlsx.mjs", "./libs/*.js"], gulp.series("ship-esm"));
});

gulp.task("default", gulp.parallel("watch", "watch-esm"));