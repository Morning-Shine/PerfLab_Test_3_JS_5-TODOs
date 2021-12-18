import { debounce } from '@core/utils';


export class StateProcessor {
  constructor(client) {
    this.client = client;
    this.listen = debounce(this.listen.bind(this), 300);
  }

  listen(state) {    
    this.client.save(state);
  }

  get() {
    return this.client.get();
  }
}
