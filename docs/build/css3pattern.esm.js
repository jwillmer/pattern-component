import { p as patchBrowser, b as bootstrapLazy } from './index-987772c2.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["css-pattern",[[1,"css-pattern",{"pattern":[1],"patternFor":[1,"pattern-for"],"getPatternFromExternalTitle":[64],"getPatternFromPatternName":[64],"getAllAvailablePatterns":[64]}]]]], options);
});
