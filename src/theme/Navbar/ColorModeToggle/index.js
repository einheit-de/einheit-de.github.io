import React from 'react';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';

function broadcastColorMode(e) {
  if (typeof window != "undefined") {
    window.dispatchEvent(new CustomEvent("themeChange", {detail: e}))
  }
}
export default function NavbarColorModeToggle({className}) {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const {colorMode, setColorMode} = useColorMode();
  if (disabled) {
    return null;
  }
  return (
    <ColorModeToggle
      className={className}
      value={colorMode}
      onChange={event => { setColorMode(event); broadcastColorMode(event)}}
    />
  );
}
