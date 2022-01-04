import Dockerode from "dockerode";
import Docker from "dockerode";

const OPTIONS = {
  build : {
    context: __dirname, 
    src: ['Dokcerfile']
  }
}

// setup the image we will build containers from
let docker = new Docker();
let stream = await docker.buildImage(OPTIONS.build, {t: "holden/container"});
await new Promise((resolve, reject) => {
  docker.modem.followProgress(stream, (err, res) => err ? reject(err) : resolve(res));
});

class Container {
  constructor(){
    this.container = docker.createContainer();
  }
}

module.exports = Container;