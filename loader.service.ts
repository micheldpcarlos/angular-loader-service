import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoaderService {
  //public subject that controls a personalized loader
  public showLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //counter to control multi calls
  private loaderCounter: number = 0;

  constructor() {
  }

  /**
   * Include +1 to loader counter
   */
  public enable() {
    this.loaderCounter++;
    this.verifyLoader();
  }

  /**
   * Remove 1 from loader counter
   */
  public disable() {
    this.loaderCounter--;
    this.verifyLoader();
  }

  /**
   * Reset loader conter to 0
   */
  public reset() {
    this.loaderCounter = 0;
    this.verifyLoader();
  }

  /**
   * Verify and emmit loader control subject
   */
  private verifyLoader() {
    const hasLoader = this.showLoader.getValue();

    if (!hasLoader && this.loaderCounter > 0){
      this.showLoader.next(true);
    }
    else if (hasLoader && this.loaderCounter == 0) {
      this.showLoader.next(false);
    }
  }
}
