
class Container {
  constructor(container) {
    this.container = container;
    this.ip = this.getIp(this.container);
  }

  async execute(code, callback) {
    const request_options = {
      url: `http://${this.ip}:3000`,
      fetch_opts: {
        method: 'POST',
        body: {
          code: code,
        },
      },
    };
    const result = await fetch(request_options.url, request_options.fetch_opts);
    callback(null, result.body);
  }

  getIp(container) {
    this.container.inspect( (err, data) => {
      if (err) {
        console.log('unable to retrieve container ip');
        return;
      }
      container.ip = data.NetworkSettings.IPAddress;
    },
    );
  }
}

module.exports = Container;
