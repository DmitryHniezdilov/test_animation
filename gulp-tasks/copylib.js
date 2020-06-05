"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("copylib", () => {
    return gulp.src(paths.lib.src)
        .pipe(gulp.dest(paths.lib.dist))
        .pipe(browsersync.stream());
});