const { Gaze } = require('gaze');
const path = require('path');
const merger = require('swagger-merger');

function resolve_path (dir) {
  return path.join(__dirname, '..', dir);
}

// TODO: 複数プロジェクトに対応する
function multi_file(project) {
  const file_path = resolve_path('./spec/example_project/main.yml');
  const dest_file_path = resolve_path('./spec/example_project/combined.yml');
  const option = {
    input: file_path,
    output: dest_file_path,
  };
  merger(option).catch(err => {
    console.error(err);
  });
}
function watch() {
  const gaze = new Gaze(resolve_path('./spec/**'));
  gaze.on('error', (err) => { throw err; });
  gaze.on('all', (event, filepath) => {
    console.log(event, filepath);
    multi_file(filepath);
  });
  const restart = () => {
    gaze.close();
    watch();
  }
  gaze.on('added', (watcher) => restart());
  gaze.on('removed', (watcher) => restart());
}
watch();
