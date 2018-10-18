/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class task {
  private _recordId : string;
  private _department : string;

  public constructor(recordId : string, department : string) {
    this._recordId = recordId;
    this._department = department;
  }

  public get recordId(): string {
    return this._recordId;
  }

  public set recordId(value: string) {
    this._recordId = value;
  }

  public get department(): string {
    return this._department;
  }

  public set department(value: string) {
    this._department = value;
  }
}

export interface pendingTask {
  [prop: string]: any;
}
