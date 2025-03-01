import './style.css'

import { Grid } from './scripts/components/Grid';
import { MainThree } from './scripts/MainThree'
import { Ticker } from './scripts/utils/Ticker';

export class Main {
  static Init() {
    MainThree.Init();
    Ticker.Start();

    this.#_CreateScene()
  }

  static #_CreateScene() {
    MainThree.Add(new Grid())
  }
}

Main.Init()