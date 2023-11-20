'use client';

import React from 'react';
import ClientRenderComponent from '@/app/hydration/components/ClientRenderComponent';

function isServerRender() {
  return typeof window === 'undefined';
}

function Hydration() {
  return isServerRender() ? <div>isServer</div> : <ClientRenderComponent />;
}

export default Hydration;
