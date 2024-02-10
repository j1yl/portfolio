import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="sticky left-0 top-0 grid w-full border-b border-black px-8 py-4 md:grid-cols-3">
      <span>Icon</span>
      <ul className="flex items-center justify-center gap-4">
        <li>Projects</li>
      </ul>
      <ul className="flex items-center justify-end gap-2">
        <li>TM</li>
      </ul>
    </div>
  );
}
