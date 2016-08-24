export class Dispatcher {
  private _callbacks : Array<any>;

  constructor() {
    this._callbacks = new Array<any>()
  }

  public register( callback : any ) {
    return this._callbacks.push( callback );
  }

  public dispatch( payload : any ) {
    this._callbacks.forEach( ( callback ) => {
      try {
        callback( payload );
      } catch( exception ) {
        console.log( 'Error Dispatch : ', exception );
      }
    } );
  }
}
