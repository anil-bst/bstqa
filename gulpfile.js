const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const dotenv = require('dotenv');
const sourcemaps = require('gulp-sourcemaps');
const tsImport = require('gulp-typescript-path-resolver');
const ts = require('gulp-typescript');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const browserify = require('browserify');
const replace = require('gulp-replace');

dotenv.config();
const env = (process.env.ENVIRONMENT || 'local').toLowerCase();
const isProduction = env === 'production' || env === 'staging';

/**
 * compiles server side of the app to js from ts.
 */
function server() {
  const tsProject = ts.createProject('tsconfig.json');
  return gulp
    .src(['src/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(tsImport.tsPathResolver(tsProject.config.compilerOptions))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.join(__dirname, 'dist')));
}

/**
 * moves templates to static folder
 */
function templates() {
  const templatePaths = path.join(
    __dirname,
    'src',
    'frontend',
    'templates',
    '**',
    '*.html',
  );
  return gulp
    .src(templatePaths)
    .pipe(gulp.dest(path.join(__dirname, 'dist', 'frontend', 'templates')));
}

/**
 * compiles scss to css in prod mode
 */
function css() {
  const sassPaths = path.join(
    __dirname,
    'src',
    'frontend',
    'scss',
    '**',
    '*.scss',
  );
  const postcssPlugins = [autoprefixer(), cssnano()];
  return gulp
    .src(sassPaths)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
        precision: 10,
        includePaths: ['.'],
        onError: console.error.bind(console, 'Sass error:'),
      }),
    )
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest(path.join(__dirname, 'dist', 'public', 'css')));
}

/**
 * moves assests to the public path in prod mode
 */
function assets() {
  const assetPaths = path.join(__dirname, 'src', 'frontend', 'assets', '**');
  return gulp
    .src(assetPaths)
    .pipe(gulp.dest(path.join(__dirname, 'dist', 'public', 'assets')));
}

/**
 * moves resources to dist
 */
function resources() {
  const resourcePaths = path.join(__dirname, 'src', 'resources', '**');
  return gulp
    .src(resourcePaths)
    .pipe(gulp.dest(path.join(__dirname, 'dist', 'resources')));
}

/**
 * Replace Process.env.{variable} in scripts/environment.ts with their actual value in build
 */
function setEnvScripts() {
  const src = gulp.src(
    path.join(
      __dirname,
      'dist',
      'frontend',
      'scripts',
      'environment',
      'environment.js',
    ),
    { base: './' },
  );

  // replacing all environment variables with their actual value
  for (const key in process.env) {
    src.pipe(replace(`process.env.${key}`, process.env[key] || ''));
  }

  // replacing all unfound environment variables with undefined
  src.pipe(replace(/process.env.(\w|_){1,}/gm, ''));

  return src.pipe(gulp.dest('./'));
}

/**
 * bundle multiple js files generated from transpile scripts
 * to a single js file
 * main.js is the entry point and all module are included in the final build
 */
function bundleScripts() {
  const scriptPath = path.join(
    __dirname,
    'dist',
    'frontend',
    'scripts',
    '**',
    'main.js',
  );
  return (
    gulp
      .src(scriptPath, { read: false })
      // transform file objects using gulp-tap plugin
      .pipe(
        tap(function(file) {
          // replace file contents with browserify's bundle stream
          file.contents = browserify(file.path, { debug: true }).bundle();
        }),
      )
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(
        terser({
          parse: {
            ecma: 5,
          },
          compress: {
            hoist_funs: true,
            dead_code: true,
          },
          warnings: 'verbose',
          toplevel: true,
        }),
      )
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.join(__dirname, 'dist', 'public', 'js')))
  );
}

/**
 * watcher on all static script files,
 * if changes occur it rebuilds them
 */
function watchStaticFiles() {
  const scripts = gulp.series(server, setEnvScripts, bundleScripts);
  gulp.watch(path.join(__dirname, 'src', 'frontend', 'scss', '**'), css);
  gulp.watch(path.join(__dirname, 'src', 'frontend', 'assets', '**'), assets);
  gulp.watch(path.join(__dirname, 'src', 'frontend', 'scripts', '**'), scripts);
  gulp.watch(
    path.join(__dirname, 'src', 'frontend', 'templates', '**'),
    templates,
  );
}

const scripts = gulp.series(setEnvScripts, bundleScripts);
exports.server = server;
exports.css = css;
exports.scripts = scripts;
exports.assets = assets;
exports.templates = templates;
exports.resources = resources;
exports.watch = watchStaticFiles;

const defaultTasks = gulp.parallel([
  css,
  gulp.series([server, scripts]),
  assets,
  templates,
  resources
]);
exports.default = defaultTasks;
