var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsConfig.json'),
    appSource = 'app/dev/',
    tsSource = 'app/typescript/';

/* Toma unicamente los archivos que necesitas de la carpeta node_modules y los copia en la carpeta de la aplicacion */
    gulp.task('copiarLibrerias', function () {
        return gulp
            .src([
                'node_modules/es6-shim/es6-shim.min.js',
                'node_modules/systemjs/dist/system-polyfills.js',
                'node_modules/angular2/bundles/angular2-polyfills.js',
                'node_modules/systemjs/dist/system.src.js',
                'node_modules/rxjs/bundles/Rx.js',
                'node_modules/angular2/bundles/angular2.dev.js',
                'node_modules/firebase/firebase.js',
                'node_modules/angular2/typings/browser.d.ts'
            ])
            .pipe(gulp.dest(appSource + 'js/lib/angular2'));
    });

/* Compila los archivos de typescript en Javascript y los copia en la carpeta de la aplicacion */
    gulp.task('typescript', function () {
        return gulp
            .src(tsSource + '**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(tscConfig.compilerOptions))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(appSource + 'js/'))
    })


/* Monitorea los cambios en los archivos fuente de la aplicacion y refresca el documento cuando es necesario */
    gulp.task('watch', function () {
        gulp.watch(tsSource + '**/*.ts', ['typescript']);
        gulp.watch(appSource + 'css/*.css');
        gulp.watch(appSource + '**/*.html');
    });

/* Mantiene un servidor basico para depurar la aplicacion en modo local */
    gulp.task('webserver', function () {
        gulp.src(appSource)
            .pipe(webserver({
                livereload: true,
                open: true
            }))
    })

/** Define las tareas para ejecutar por defecto  */
    gulp.task('default', ['copiarLibrerias', 'typescript', 'watch', 'webserver']);