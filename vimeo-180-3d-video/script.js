window.toggleVimeoPlay = function (vimeoPluginId) {
  const vimeoPluginInstance = document.querySelector(`#${vimeoPluginId}`);
  if (vimeoPluginInstance && vimeoPluginInstance.components) {
    const vimeoComponent = vimeoPluginInstance.components.vimeo;
    if (vimeoComponent) {
      const vimeoPlayer = vimeoComponent.player;
      if (vimeoPlayer.isPlaying()) {
        vimeoPlayer.pause();
      } else {
        vimeoPlayer.play();
      }
    }
  }
}
