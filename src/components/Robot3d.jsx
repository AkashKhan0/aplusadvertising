"use client";
import Spline from '@splinetool/react-spline';

export default function Robot3d() {
  return (
    <div className="w-full h-full fixed top-0 left-0 opacity-40 -z-10">
        <main className="w-full h-screen">
      <Spline scene="https://prod.spline.design/qBycUiKpRz2Sl6ju/scene.splinecode" />
    </main>
    </div>
  );
}
