let Docker = require('dockerode');
let docker = new Docker();
let path = require('path');
const Container = require('./container');

const OPTIONS = {
  build : {
    context: path.join(__dirname, 'container/'),
    src: ['Dockerfile', 'index.js']
  },
  container_tag: "gutwin/container"
}

// setup the image we will build containers from
async function make_image(){
  let docker = new Docker();
  let stream = await docker.buildImage(OPTIONS.build, {t: OPTIONS.container_tag});
  await new Promise((resolve, reject) => {
    docker.modem.followProgress(stream, (err, res) => err ? reject(err) : resolve(res));
  });
  // build complete
}
make_image();

class Pool {
  constructor(){
    this.containers = [];
  }

  createContainer(){
    docker.createContainer({Image: OPTIONS.container_tag}, (err, container) => {
      if(err){
        console.log("error creating container");
        return;
      }
      container.start((err, data) => {
        this.containers.push(new Container(container));
      })
    });
  }
}

module.exports = Pool;