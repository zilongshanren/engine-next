// intenral
import App from './lib/app';
import Scene from './lib/scene/scene';
import Camera from './lib/scene/camera';
import SpriteModel from './lib/scene/sprite-model';
import resl from './lib/resl';

import SpriteMaterial from './lib/materials/sprite-material';

import Asset from './lib/assets/asset';
import Material from './lib/assets/material';

import SharedArrayBuffer from './lib/utils/shared-array-buffer';
import renderMode from './lib/utils/render-mode';

// deps
import { Node } from 'scene-graph';
import * as math from 'vmath';
import renderer from 'renderer.js';
import gfx from 'gfx.js';
import canvas from './lib/canvas';

let engine = {
  // classes
  App,
  Scene,
  Node,
  Camera,
  SpriteModel,

  // materials
  SpriteMaterial,

  // assets
  Asset,
  Material,

  // utils
  SharedArrayBuffer,
  renderMode,

  // modules
  math,
  renderer,
  gfx,
  canvas,

  // DELME: temporary
  resl,
};

export default engine;