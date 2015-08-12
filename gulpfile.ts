/// <reference path="typings/tsd.d.ts" />

import gulp = require('gulp');
import del = require('del');

gulp.task('clean', (done) => {
	del([
		'spec/**/*.js',
		'src/**/*.js',
		'*.js'
	], done);
});

gulp.task('clean-dist', ['clean'], (done) => {
	del(['dist'], done);
});

gulp.task('dist', (done) => {
	gulp.src('src/**/*.js')
		.pipe(gulp.dest('dist/app'));
		
	gulp.src('css/**/*.*')
		.pipe(gulp.dest('dist/css'));
		
	gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
		.pipe(gulp.dest('dist/vendor/bootstrap/css'));
		
	gulp.src('node_modules/bootstrap/dist/js/bootstrap.js')
		.pipe(gulp.dest('dist/vendor/bootstrap/js'));
		
	gulp.src('node_modules/bootstrap/dist/fonts/*.*')
		.pipe(gulp.dest('dist/vendor/bootstrap/fonts'))
		
	gulp.src('index.html')
		.pipe(gulp.dest('dist'));
		
	gulp.src('main.js')
		.pipe(gulp.dest('dist'));
		
	gulp.src('package.json')
		.pipe(gulp.dest('dist'));
		
	done();
});

gulp.task('build', () => {
	// TODO
});

gulp.task('default', ['build']);