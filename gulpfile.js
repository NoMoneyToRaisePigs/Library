var gulp = require('gulp');
var less = require('gulp-less'); 
//var browserSync = require('browser-sync').create();
//var reload      = browserSync.reload;
var del = require('del');
var fs = require('fs');
var path = require('path');
//var root = 'C:\\Users\\Fan\\Documents\\gaofan folder\\hello git\\NG-Quick-Start-Webpack\\src\\app';
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
  let currentPath = path.join(__dirname, "src");
  getAllFolders([currentPath]);
  let compile = [];
  allFolders.forEach(x => compile.push(path.join(x,'*.less')));

  gulp.src(compile)
    .pipe(less())
    .pipe(gulp.dest('.'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  let currentPath = path.join(__dirname, "src");
  getAllFolders([currentPath]);
  let compile = [];
  allFolders.forEach(x => compile.push(path.join(x,'*.less')));
  gulp.watch(compile , ['compile-less']);
});
 
/* Task to clean compliled files */
gulp.task('clean', function() {  
    var currentPath = path.join(__dirname, "src");
    getAllFolders([currentPath]);
    var toBeCleaned = [];
    allFolders.forEach(x => toBeCleaned.push(path.join(x,'*.css')));
    allFolders.forEach(x => toBeCleaned.push(path.join(x,'*.js')));
    allFolders.forEach(x => toBeCleaned.push(path.join(x,'*.map')));
    toBeCleaned.push(path.join(currentPath,"*.js"));
    toBeCleaned.push(path.join(currentPath,"*.map"));
    toBeCleaned.push('!' + path.join(currentPath, "systemjs.config.js"));

    return del(toBeCleaned);
});


gulp.task('default', ['watch-less']);