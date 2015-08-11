/// <reference path="../tsd.d.ts" />

declare function clean(): NodeJS.ReadWriteStream;

declare module "gulp-clean" {
	export = clean;
} 