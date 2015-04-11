
'use strict';

module.exports = function(game, opts) {
  return new FooPlugin(game, opts);
};


module.exports.pluginInfo = {
  loadAfter: []
};

function FooPlugin(game, opts) {
  // Functionality of plugin

  // Dependencies
  /* example:
  this.mesherPlugin = game.plugins.get('voxel-mesher');
  if(!this.mesherPlugin) throw new Error('voxel-foo requires voxel-mehser');
  */
  // Adds voxel-mesher as a requirement for voxel-foo

  // Load options
  /* eg
  this.showOutline = opts.showOutline !== undefined ? opts.showOutline : true;
  */

  this.enable();
}

FooPlugin.prototype.enable = function() {
  var self = this;
  this.FooPlugin = this.game.plugins.get('voxel-health');
  // Register listeners

}

FooPlugin.prototype.disable = function() {
  // Remove Listeners
}

FooPlugin.foo(){
  // This plugin can be called by the game
  // Do something
}
