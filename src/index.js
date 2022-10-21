export default class BaseHttpService {
  id;
  relationship;
  instanceAxios;
  endpoint;

  requests = {
    show: "get",
    store: "post",
    update: "put",
    delete: "delete",
  };

  constructor(id = String(), relationship, resourceName, instanceAxios) {
    this.id = id ? `/${id}` : String();
    this.endpoint = String();
    this.relationship = relationship;
    this.instanceAxios = instanceAxios;
    this.resource = resourceName;
    this.generateRelationships();
    this.bindResourcesHTTP();
  }


  uri() {
    return `${this.resource}${this.id}${this.endpoint}`;
  }

  getRelationship(resource, id = String()) {
    id = id ? `/${id}` : String();
    this.endpoint = resource ? `${this.endpoint}/${resource}${id}` : String();

    return this;
  }

  assignRelations(nameRelation) {
    Object.assign(BaseHttpService.prototype, {
      [nameRelation]: (id) => {
        this.getRelationship(this.relationship[nameRelation], id);
        return this;
      },
    });
  }

  hasQueryString(httpMethod, data) {
    if (httpMethod === "get") return { params: { ...data } };
    return data;
  }

  async runRequest(data, httpMethod) {
    let requestParam = this.hasQueryString(httpMethod, data);
    try {
      let res = await this.instanceAxios[httpMethod](this.uri(), requestParam);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  assignDefaultsMethods(httpMethod) {
    Object.assign(BaseHttpService.prototype, {
      [httpMethod]: (data) => {
        return this.runRequest(data, this.requests[httpMethod]);
      },
    });
  }

  bindResourcesHTTP() {
    let httpMethods = Object.keys(this.requests);
    httpMethods.map((method) => {
      this.assignDefaultsMethods(method);
    });
  }

  generateRelationships() {
    Object.keys(this.relationship).map((nameRelation) => {
      this.assignRelations(nameRelation);
    });
  }
}
