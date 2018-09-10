class ApiShell {
  constructor(options = {}) {
    const {api = {}} = options;
    this.apiMap = api;
    this.interaptors = {
      request: [],
      response: []
    };
  }
  dispatch(name, config) {
    if(typeof this.apiMap[name] !== 'function') {
      return Promise.reject(`Api named ${name} dose not exist`);
    }
    const api = this.apiMap[name];
    const chain = [api, undefined];
    let promise = Promise.resolve(config);
    this.interaptors.request.forEach(item => {
      chain.unshift(...item);
    });
    this.interaptors.response.forEach(item => {
      chain.push(...item)
    })

    while(chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  regist({name, api}) {
    this.apiMap[name] = api;
  }
  addRequestInteraptor(resolve, reject) {
    return this.interaptors.request.push([resolve, reject])
  }
  removeRequestInteraptor(id) {
    return this.interaptors.request.splice(id, 1)
  }
  addResponseInteraptor(resolve, reject) {
    return this.interaptors.response.push([resolve, reject])
  }
  removeResponseInteraptor(id) {
    return this.interaptors.response.splice(id, 1)
  }
}

export default ApiShell;
