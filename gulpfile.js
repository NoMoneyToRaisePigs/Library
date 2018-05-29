var gulp = require('gulp');
var less = require('gulp-less'); 
//var browserSync = require('browser-sync').create();
//var reload      = browserSync.reload;
var del = require('del');
var fs = require('fs');
var path = require('path');
var root = 'C:\\Users\\Fan\\Documents\\gaofan folder\\hello git\\NG-Quick-Start-Webpack\\src\\app';
var allFolders = [];
 

function getFolders(directory){
    let folders = [];

    fs.readdirSync(directory)
                  .filter((directoryitem)=>{
                       return fs.statSync(path.join(directory,directoryitem)).isDirectory();
                   })
                   .forEach((folderItem)=>{
                        folders.push(path.join(directory,folderItem));
                   });

    allFolders = allFolders.concat(folders);
    return folders; 
}

function getAllFolders(folders){   
    for(let i =0; i< folders.length; i++){
         getAllFolders(getFolders(folders[i]));
    };
}

/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('src/app/**/*.less',{base:"./"})
    .pipe(less())
    .pipe(gulp.dest('.'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./src/app/**/*.less' , ['compile-less']);
});
 
// gulp.task('serve', function () {
 
//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./distro/"
//         }
//     }); 
//     gulp.watch("./src/*.less").on("change", reload);
//     gulp.watch("./distro/*.html").on("change", reload);
// });
 
/* Task when running `gulp` from terminal */
//gulp.task('default', ['watch-less', 'serve']);
gulp.task('clean-css', function() {  
    return del([
    './src/app/**/*.css'
  ]);
});


gulp.task('clean-js', function() {  
    return del([
    './src/app/**/*.js',
    './src/app/**/*.map'
  ]);
});

gulp.task('default', ['watch-less']);